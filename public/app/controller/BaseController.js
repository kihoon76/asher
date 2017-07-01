Ext.define('Asher.controller.BaseController', {
	extend : 'Ext.app.Controller'
   ,uses   : ['Asher.util.Server', 'Asher.util.CommonFn', 'Asher.util.MessageKr']
   ,init   : function() {
	   this.control({
		   'categorypanel' : {
			   itemclick : this.onItemReg
   			}
   		});
   }
   ,onLaunch : function() {
	   var that = this;
	   this.Server = Asher.util.Server;
	   this.addedCategoryMap = {};
	   this.contentPanel  = Ext.getCmp('app-contents');
	   this.categoryPanel = Ext.getCmp('app-category');
	   this.resultPanel   = Ext.getCmp('app-results');

	   this.Constants = Asher.util.Constants;
	   this.CommonFn  = Asher.util.CommonFn;
	   this.MESSAGE   = Asher.util.MessageKr;
	   this.debug     = this.Constants.debug;
   }
   ,addContentTabPanel : function(id, title, cont, tbar) {
	   var conf = {
			 id    : id + '-panel'
			,title : title
			,layout   : 'fit'
			,closable : true
	   };

	   if(Ext.isString(cont)) {
		   conf.items = [{
			   autoScroll : true
			  ,html : cont
		   }];
	   }
	   else {
		   conf.items = [cont];
	   }

	   if(Ext.isArray(tbar)) {
		  conf.tbar = tbar;
	   };

	   this.contentPanel.add(Ext.create('Ext.panel.Panel',conf));
	   this.contentPanel.setActiveTab(id + '-panel');
	   this.categoryPanel.addCategoryInTab(id);
   }
   ,addResultTabPanel : function(title, cont) {
	   this.resultPanel.removeAll();

	   var conf = {
			 id    : 'result-panel'
			,title : title
			,layout   : 'fit'
			,closable : false
	   };

	   if(Ext.isString(cont)) {
		   conf.items = [{
			   autoScroll : true
			  ,html : cont
		   }];
	   }
	   else {
		   conf.items = [cont];
	   }

	   this.resultPanel.add(Ext.create('Ext.panel.Panel',conf));
	   this.resultPanel.setActiveTab(0);
	   this.resultPanel.expand(true);
   }
});