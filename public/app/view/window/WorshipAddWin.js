
Ext.define('Asher.view.window.WorshipAddWin' ,{
	extend : 'Ext.window.Window'
   ,requires : [
	    'Asher.view.iframe.WorshipWinIframe'
	   ,'Asher.view.window.UploadWin'
   ]
   ,initComponent : function() {
	   this.uploadWin = Ext.create('Asher.view.window.UploadWin');
	   var that = this;

	   Ext.apply(this, {
		   width : 700
		  ,height : 800
		  ,plain : true
		  ,iconCls : 'icon-window'
		  ,title   : '말씀등록'
		  ,bodyStyle : 'background:#fff'
		  ,layout : 'fit'
		  ,closable : false
		  ,closeAction : 'hide'
		  ,modal : true
		  ,items : [{
	   			xtype : 'worshipwiniframe'
	  	  }]
		  ,dockedItems: [{
    			xtype: 'toolbar'
    		   ,dock: 'bottom'
			   ,items: ['->', {
				    xtype : 'button'
				   ,text : '동영상/오디오/이미지 업로드'
				   ,listeners : {
					   click : function() {
						  that.uploadWin.show(); 
					   }
				   }
			   }, {
					xtype: 'button'
				   ,text: '등록'
			   }, {
				   xtype : 'button'
				  ,text : '취소'
				  ,listeners : {
					  click : function() {
						  that.hide();
					  }
				  }
			   }]
		  }]
	   });

	   this.callParent(arguments);
   }
});