Ext.define('Asher.view.form.BibleSearchForm', {
	 extend : 'Ext.form.Panel'
	,alias : 'widget.bibleform'
	,initComponent : function() {
		var states = Ext.create('Ext.data.Store', {
			fields: ['abbr', 'name'],
			data : [
				{"abbr":"AL", "name":"Alabama"},
				{"abbr":"AK", "name":"Alaska"},
				{"abbr":"AZ", "name":"Arizona"}
			]
		});

		var bibleTpl = Ext.create('Ext.XTemplate'
			,'<hr>'
			,'<tpl for=".">'
			,'<div class="search-item">'
			,'<h3><span>{abbr}</span><span>{name}</span></h3>'
			,'</div>'
			,'</tpl>'
		);

		var bibleConfig = {};
		var comboChapVerse = {
			 bibleValue : ''
			,fChapCombo : null
			,fVerseCombo : null
			,tChapCombo : null
			,tVerseCombo : null
			,fChapLoad : function(k) {
				this.bibleValue = k;
				var len = bibleConfig[k].chap;
				var arr = [];
				for(var i=0; i<len; i++) {
					arr.push([i, (i + 1) + '장']);
				}
				this.fChapCombo.getStore().loadData(arr);
			}
			,fVerseLoad : function(k) {
				var verses = bibleConfig[this.bibleValue].versePerChap;
				var len = verses[k];
				console.log(k);
				var arr = [];
				for(var i=0; i<len; i++) {
					arr.push([i, (i + 1) + '절']);
				}
				this.fVerseCombo.getStore().loadData(arr);
			} 
			,tChapLoad : function(k) {

			}
			,tVerseLoad : function(k) {

			}
		};

		

		Ext.apply(this, {
			 bodyPadding : 5
			,defaults : {
				  anchor : '100%'
				 ,labelWidth : 100
			}
			,items : [{
				 xtype : 'combobox'
				,fieldLabel : '말씀'
				,store : Ext.create('Ext.data.Store', {
					 fields : ['name', 'ename', 'chap', 'versePerChap']
					,proxy : {
					     type : 'ajax'
						,url : 'http://hoonkn.iptime.org/bible/list'
						,reader : {
							 type : 'json'
							,root : 'datas'
						}
					}
					,listeners : {
						load : function(t, r, s) {
							for(var i=r.length-1; i>=0; i--) {
								bibleConfig[r[i].data.ename] = r[i].data;
							}
						}
					}
				})
				,queryMode : 'remote'
				,displayField : 'name'
				,valueField : 'ename'
				,editable : false
				,listeners : {
					change : function(combo, nV, oV) {
						comboChapVerse.fChapLoad(nV);
					}
				}
			}, {
				 xtype : 'fieldcontainer'
				,fieldLabel : 'from'
				,layout : 'hbox'
				,defaults : {
					 flex : 1
					,hideLabel : true
					,editable : false
				}
				,items : [{
					 xtype : 'combobox'
					,emptyText : '장'
					,margin : '0 5 0 0'
					,store : []
					,listeners : {
						afterrender : function(t) {
							comboChapVerse.fChapCombo = t;
						}
						,change : function(combo, nV, oV) {
							comboChapVerse.fVerseLoad(nV);
						}
					}
				}, {
					 xtype : 'combobox'
					,emptyText : '절'
					,store : []
					,listeners : {
						afterrender : function(t) {
							comboChapVerse.fVerseCombo = t;
						}
					}
				}]
			}, {
				 xtype : 'fieldcontainer'
				,fieldLabel : 'to'
				,layout : 'hbox'
				,defaults : {
					 flex : 1
					,hideLabel : true
					,editable : false
				}
				,items : [{
					 xtype : 'combobox'
					,emptyText : '장'
					,margin : '0 5 0 0'
					,listeners : {
						afterrender : function(t) {
							comboChapVerse.tChapCombo = t;
						}
						,change : function(combo, nV, oV) {
							comboChapVerse.tVerseLoad(nV);
						}
					}
				}, {
					 xtype : 'combobox'
					,emptyText : '절'
					,listeners : {
						afterrender : function(t) {
							comboChapVerse.tVerseCombo = t;
						}
					}
				}]
			}, {
				 xtype : 'button'
				,text : '검색'
			}, {
				 xtype : 'dataview'
				,tpl : bibleTpl
				,store : states
				,overflowY : 'auto'
				,height : 300
			}]
		});

		this.callParent(arguments);
	}
});