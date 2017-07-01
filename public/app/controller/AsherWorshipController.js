Ext.define('Asher.controller.AsherWorshipController', {
	 extend : 'Asher.controller.BaseController'
    ,views  : ['panel.WorshipListGrid']
	,onLaunch : function() {
		this.callParent(arguments);
	}
	,onItemReg : function(tp, record, item, idx, e) {
		var recObj = record.raw;

		if(recObj.leaf) {
			if(!this.categoryPanel.isAttachedCategory(recObj.id)) {
				switch(recObj.id) {
					case 'cate-sunday-worship' :
						this.addContentTabPanel(recObj.id, recObj.text, {
							xtype : 'worshipgrid'
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
