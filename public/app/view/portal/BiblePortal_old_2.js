Ext.define('Asher.view.portal.BiblePortal', {
     extend : 'Ext.container.Viewport'
    ,uses : [
         'Asher.view.portal.PortalPanel'
        ,'Asher.view.portal.PortalColumn'
        ,'Asher.view.portal.GridPortlet'
        ,'Asher.view.portal.ChartPortlet'
        ,'Asher.view.iframe.MissionaryIframe'
    ]
    //,require : ['Asher.view.iframe.MissionaryIframe']
    ,getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool){
                var portlet = panelHeader.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    }
    ,initComponent : function() {
        var n = 1;
        var addBtn = Ext.create('Ext.Button' , {
              text : '추가'
             ,handler : function() {
                 //var n = Ext.getCmp('app-portal').items.length;
                 console.log(n);
                 Ext.getCmp('app-portal').add({
                     id:'col-' + ++n,
                     items:[{
                         html:'test' + n
                     }]
                 });
             }
        });

        Ext.apply(this, {
             id : 'bible-viewport'
            ,layout : {
                 type : 'border'
                ,padding : '0 5 5 5'
            }
            ,items : [{
                 id : 'bible-header'
                ,xtype : 'box'
                ,region : 'north'
                ,height : 20
                ,html : 'Bible'
            }, {
                 xtype : 'container'
                ,region : 'center'
                ,layout : 'border'
                ,items : [{
                     id : 'bible-options'
                    ,title : 'Options'
                    ,region : 'west'
                    ,animCollapse : true
                    ,width : 200
                    ,minWidth : 150
                    ,maxWidth : 400
                    ,split : true
                    ,collapsible: true
                    ,layout : {
                         type : 'accordion'
                        ,animate : true
                    }
                    ,items : [{
                         //html : 'test'
                         items : addBtn
                        ,title : 'Navigation'
                        ,autoScroll : true
                        ,border : false
                        ,iconCls : 'nav'
                    }]
                }, {
                    id: 'app-portal',
                    xtype: 'portalpanel',
                    region: 'center',
                    items: [{
                        id: 'col-1',
                        items: [{
                            id: 'portlet-1',
                            title: 'Grid Portlet',
                            tools: this.getTools(),
                            items: Ext.create('Asher.view.portal.GridPortlet'),
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        },{
                            id: 'portlet-2',
                            title: 'Portlet 2',
                            tools: this.getTools(),
                            //html: content,
                            items : Ext.create('Asher.view.iframe.MissionaryIframe'),
                           
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        }]
                    }]
                }]
            }]
        });

        this.callParent(arguments);
    }
});