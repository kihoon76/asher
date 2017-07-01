Ext.define('Asher.controller.AsherNewsController', {
	 extend : 'Asher.controller.BaseController'
    ,views  : [
		 'iframe.CalenderIframe'
		,'iframe.MissionaryIframe'
		,'iframe.CeremonyIframe'
	]
	,onLaunch : function() {
		this.callParent(arguments);
	}
	,onItemReg : function(tp, record, item, idx, e) {
		var recObj = record.raw;

		if(recObj.leaf) {
			if(!this.categoryPanel.isAttachedCategory(recObj.id)) {
				switch(recObj.id) {
					case 'cate-schedule' :
						this.addContentTabPanel(recObj.id, recObj.text, {
							xtype : 'calenderiframe'
						});
					break;
					case 'cate-missionary' :
						this.addContentTabPanel(recObj.id, recObj.text, {
							xtype : 'missionaryiframe'
						});
					break;
					case 'cate-ceremony' :
						this.addContentTabPanel(recObj.id, recObj.text, {
							xtype : 'ceremonyiframe'
						});
					break;
					default :
					break;
				}
			}
			else {
				this.contentPanel.setActiveTab(recObj.id + '-panel');
			}
		}


	}

});
