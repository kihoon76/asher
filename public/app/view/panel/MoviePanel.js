Ext.define('Asher.view.panel.MoviePanel', {
     extend : 'Ext.ux.video.VideoPanel'
    ,xtype : 'moviepanel'
    ,initComponent : function() {
        Ext.apply(this, {
             title: 'HTML5 video panel',
           video: [ { url: 'videos/Wildlife.webm', type: 'video/webm' }, 'videos/Wildlife.ogg', 'videos/Wildlife.mp4' ],
           width: 854,
           height: 480
        });

        this.callParent(arguments);
    }
});