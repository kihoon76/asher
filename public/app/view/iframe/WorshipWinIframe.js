Ext.define('Asher.view.iframe.WorshipWinIframe', {
	extend : 'Ext.panel.Panel'
   ,alias  : 'widget.worshipwiniframe'
   ,layout : 'fit'
   ,uses : ['Asher.util.Constants']
   ,initComponent : function() {
	   Ext.apply(this, {
		    items : [{
	   			xtype : 'box'
	  		   ,autoEl : {
		  			tag : 'iframe'
				   ,frameborder : 0
		 		   ,src : Asher.util.Constants.context + '/worship/addform'
	  		   }
   			}]
	   });

	   this.callParent(arguments);
   }

});
