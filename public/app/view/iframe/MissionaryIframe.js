Ext.define('Asher.view.iframe.MissionaryIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.missionaryiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/missionary'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
