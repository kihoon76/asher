Ext.define('Asher.view.iframe.JqueryUploadIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.jqueryuploadiframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/upload/addform'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
