Ext.define('Asher.view.iframe.CalenderIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.calenderiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/schedule'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
