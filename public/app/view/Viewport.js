Ext.define('Asher.view.Viewport', {
    extend : 'Ext.container.Viewport'
   ,uses   : ['Asher.view.panel.CategoryPanel']
   ,initComponent: function(){
        Ext.apply(this, {
            id     : 'app-viewport'
           ,layout : {
                type    : 'border'
               ,padding : '0 5 5 5'
            }
           ,items: [{
			   xtype : 'loadmask'
			  ,id : 'load-indicator'
			  ,indicator:true
			  ,hidden : true
			  ,target : this
		   },{
                id     : 'app-header'
               ,xtype  : 'box'
               ,region : 'north'
               ,height : 40
               ,html   : '<img src="../../resources/images/asher.png" style="width:200px; height:40px">'
            },{
            	id          : 'app-category'
               ,xtype       : 'categorypanel'
               ,region      : 'west'
               ,width       : '20%'
               ,split       : true
               ,collapsible : true
               ,minWidth    : 150
               ,maxWidth    : 250
            },{
                id        : 'app-contents'
               ,xtype     : 'tabpanel'
               ,region    : 'center'
               ,plugins   : [Ext.create('Asher.plugins.TabClose')]
               ,listeners : {
            	   remove :  function(pl, component, opt) {
            		   var id = component.getItemId().replace('-panel', '');
            		   Ext.getCmp('app-category').rmCategoryInTab(id);
            	   }
                  ,tabchange : function(tp, nC, oC) {
                	  if(oC == undefined) return;
                	  //이전 탭이 메시지 작성이라면 선택한 아이템 목록 윈도우를 닫아준다.
                	  if(oC.id == 'cate-bbs-batchWrite-panel') {
                		 var win = Ext.getCmp('bbsItemListWin');
                		 if(!Ext.isEmpty(win) && !win.isHidden()) {
                			 win.hide();
                		 }
                	  }

                	  if(oC.id == 'cate-event-reg-panel') {
                		  var win = Ext.getCmp('eventItemListWin');
                		  if(!Ext.isEmpty(win) && !win.isHidden()) {
                			  win.hide();
                		  }
                	  }

                	  Ext.getCmp('app-results').collapse(Ext.Component.DIRECTION_BOTTOM, true);
                  }
               }
            },{
            	id          : 'app-results'
               ,xtype       : 'tabpanel'
               ,region      : 'south'
               ,split       : true
               ,title       : '결과창'
               ,collapsible : true
               ,height      : 500
               ,collapsed   : true
               ,tabPosition :'bottom'
               ,listeners : {
            	   resize : function(t) {
            		   t.doComponentLayout();
            	   }
               }
            }]
        });

        this.callParent(arguments);
    }
});
