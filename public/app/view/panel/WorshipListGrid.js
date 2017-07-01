Ext.define('Asher.view.panel.WorshipListGrid', {
     extend : 'Ext.grid.Panel'
    ,requires : [
         'Asher.view.window.WorshipAddWin'
        ,'Ext.ux.rowexpander.RowExpander'
    ]
    ,plugins : [{
         ptype : 'rowexpander'
        ,pluginId : 'rowexpander' 
        ,selectRowOnExpand : false
        ,rowBodyTpl : '{body}'
   
    }]
    ,xtype : 'worshipgrid'
    ,id : 'worshipListGrid'
    ,initComponent : function() {
        var store = Ext.create('Asher.store.WorshipListStore');
        var constants = Asher.util.Constants;
        var that = this;
        this.addWorshipWin = Ext.create('Asher.view.window.WorshipAddWin');

        Ext.apply(this, {
             store : store
            ,columns : [{
                 text : '날짜'
                ,dataIndex : 'date'
                ,flex : 0
            }, {
                 text : '말씀제목'
                ,dataIndex : 'title'
                ,flex : 1
            }, {
                 text : '말씀'
                ,dataIndex : 'bible'
                ,flex : 0
            }, {
                 text : '장'
                ,dataIndex : 'chapter'
                ,flex : 0
            }, {
                 text : '절'
                ,dataIndex : 'verse'
                ,flex : 0
            }, {
                 text : '파일'
                ,dataIndex : 'attachment'
                ,flex : 0
            }]
            ,tbar : [{
                xtype : 'button'
               ,text : '말씀등록'
               ,listeners : {
                   click : function() {
                       that.addWorshipWin.show();
                   } 

                   
               } 
            }, '->', '검색항목 : ', {

            }, '-', {

            }]
            ,dockedItems : [{
                 xtype : 'pagingtoolbar'
                ,store : store
                ,displayInfo : true
                ,displayMsg : '말씀 리스트 {0} - {1} of {2}'
                ,dock : 'bottom'
                ,doRefresh : function() {
                    Ext.getCmp('worshipListGrid').getStore().load();
                }
                ,items : ['-', {
                    text : '목록수 : '
                }, Ext.create('Ext.form.field.ComboBox', {
                     queryMode : 'local'
				    ,id : 'worship-paging-combo'
				    ,displayField : 'name'
				    ,valueField   : 'value'
				    ,editable     : false
				    ,width        : 100
				    ,value        : constants.gridPageSize
                    ,store        : Ext.create('Asher.store.PagingSize')
                    ,listeners    : {
					    change : function(cb, nV, oV) {
						   		 store.pageSize = nV;
						   		 Ext.getCmp('worshipListGrid')
                                    .getStore()
                                    .loadPage(1, {
							    		 params : {	limit : nV }
								    });
					    }
				    }
                })]
            }]
            ,listeners : {

            }
        });

        this.callParent(arguments);
    }
});