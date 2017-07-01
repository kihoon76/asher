Ext.define('Asher.view.panel.FileUpload', {
	extend      : 'Ext.form.Panel'
   ,uses        : ['Asher.util.Constants', 'Asher.util.CommonFn']
   ,width       : 200
   ,height      : 100
   ,bodyPadding : 10
   ,frame       : true
   ,initComponent : function() {
	   var that = this;
	   this.CommonFn  = Asher.util.CommonFn;
	   this.Constants = Asher.util.Constants;

	   Ext.apply(this, {
		  items : [{
              xtype      : 'filefield'
             ,name       : 'file'
             ,fieldLabel : this.fieldLabel || '파일'
             ,labelWidth : 30
             ,msgTarget  : 'side'
             ,allowBlank : false
             ,anchor     : '100%'
             ,buttonText : this.fileBtnTxt || '이미지선택'
          }]
	   	 ,buttons: [{
              text    : this.uploadBtnTxt || '업로드'
             ,handler : function() {
            	 var form = this.up('form').getForm();

            	 if(form.isValid()){
            		 form.submit({
            			 url     : that.CommonFn.getFullUrl('/upload.do')
            		    ,waitMsg : 'Uploading your file...'
            		    ,success : function(fp, o) {
                           if(Ext.isFunction(that.success)) {
                        	   that.success(fp, o);
                           }
                           else {
                        	   var fInfo = o.result.result[0];
                               that.CommonFn.showLog(that.Constants.debug, '업로드파일정보', fInfo);
                               //that.success(fp, info);
                               if(!Ext.isEmpty(that.imageEl)) {
                 				  var fileNameExt = fInfo.fileName
                 				     ,fileName = '', fileExt = '', arr = null;

                 				  if(!Ext.isEmpty(fileNameExt)) {
                 					  arr = fileNameExt.split('.');
                 					  fileName = arr[0];
                 					  fileExt  = arr[1];
                 					  that.imageEl[0].setAttribute('src', that.CommonFn.getFullUrl('rest/preview/' + arr[1] + '/' + arr[0]));
                 					  that.imageEl[0].className = that.imageEl[0].className.replace(' x-form-invalid-field', '');
                 				  }
                 			  }

                              //추가작업
                              if(Ext.isFunction(that.successExtra)) {
                            	  that.successExtra(fp, fInfo);
                              }
                           }
                        }
            		    ,failure : function(fp, o) {
            		    	console.log(o);
            		    	var form = o.form;
            		    	Ext.Msg.alert(form.title + ' 실패', 'Your file has been uploaded.');
            		    }
            		 });
            	 }
             }
	   	 }]
	 });

	 this.callParent(arguments);
   }
});