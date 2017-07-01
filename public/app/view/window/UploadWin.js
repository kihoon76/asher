
Ext.define('Asher.view.window.UploadWin' ,{
	extend : 'Ext.window.Window'
   ,requires : ['Asher.view.iframe.JqueryUploadIframe']
   ,initComponent : function() {
	   var that = this;
	   Ext.apply(this, {
		   width : 700
		  ,height : 400
		  ,plain : true
		  ,iconCls : 'icon-window'
		  ,title   : '동영상/오디오/이미지 업로드'
		  ,bodyStyle : 'background:#fff'
		  ,layout : 'fit'
		  ,closable : true
		  ,maximizable : true
		  ,closeAction : 'hide'
		  ,modal : true
		  ,items : [{
	   			xtype : 'jqueryuploadiframe'
	  	  }]
		 
	   });

	   this.callParent(arguments);
   }
});