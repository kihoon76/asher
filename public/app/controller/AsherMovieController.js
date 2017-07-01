Ext.define('Asher.controller.AsherMovieController', {
	 extend : 'Asher.controller.BaseController'
	//,requires : ['Asher.view.panel.MoviePanel']
	,requires : ['Ext.ux.video.VideoPanel']
	,views : ['iframe.MovieIframe']
  	,onLaunch : function() {
		this.callParent(arguments);
	}
	,onItemReg : function(tp, record, item, idx, e) {
		var recObj = record.raw;
		
		if(recObj.leaf) {
			if(!this.categoryPanel.isAttachedCategory(recObj.id)) {
				switch(recObj.id) {
					case 'cate-movie' :
						this.addContentTabPanel(recObj.id, recObj.text, {
							xtype : 'movieiframe'
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
