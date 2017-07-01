Ext.define('Asher.view.iframe.BibleIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.bibleiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/bibleportal'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
