Ext.define('Asher.view.iframe.CeremonyIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.ceremonyiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/ceremony'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
