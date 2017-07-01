Ext.define('Asher.view.panel.CategoryPanel', {
	 extend      : 'Ext.tree.Panel'
    ,alias       : 'widget.categorypanel'
    ,uses        : ['Asher.util.Constants']
    ,title       : '카테고리'
    ,initComponent : function() {
    	var addedCategoryMap = {};
    	Ext.apply(this, {
    		 store : Ext.create('Ext.data.TreeStore', {
    	    	 root : {
    	    		  expanded : true
					 ,children : [{
						 text : '교회소식', expand : true, iconCls : 'tree-expand'
						,children : [{
							text : '교회일정', leaf : true, cate : 'news', id : 'cate-schedule'
						}, {
							text : '선교지', leaf : true, cate : 'news', id : 'cate-missionary'
						}, {
							text : '행사', leaf : true, cate : 'news', id : 'cate-ceremony'
						}]
					 }, {
						 text : '예배', expand : true, iconCls : 'tree-expand'
						,children : [{
							text : '주일예배', leaf : true, cate : 'worship', id: 'cate-sunday-worship'
						}]
					 }, {
						 text : '아셀워십288' , expand : true, leaf : true, iconCls : 'tree-expand' ,cate : 'movie', id : 'cate-movie'
					 }, {
						 text : '성경' , expand : true, leaf : true, iconCls : 'tree-expand' ,cate : 'bible', id : 'cate-bible'
					 }]
    	    	 }
    	    })
    	    ,rootVisible : false
    	    ,isAttachedCategory : function(id) {
    	 	   return addedCategoryMap[id] != null;
    	    }
    	    ,addCategoryInTab : function(id) {
    	    	addedCategoryMap[id] = 'Y';
    	    }
    	    ,rmCategoryInTab : function(id) {
    	    	delete addedCategoryMap[id];
    	    }
    	    ,rmAllInTab : function() {
    	    	addedCategoryMap = {};
    	    }
    	    ,listeners : {
    	    	itemexpand : function(n, opt) {
    	    		n.set('iconCls', 'tree-expand');
    	    	}
    	       ,itemcollapse : function(n, opt) {
    	    	   console.log(n)
    	    	   n.set('iconCls', 'tree-collapse');
    	       }
    	    }
    	});

    	this.callParent(arguments);
    }
});