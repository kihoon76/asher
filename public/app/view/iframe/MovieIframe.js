Ext.define('Asher.view.iframe.MovieIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.movieiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/asher288'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
