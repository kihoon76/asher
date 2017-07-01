Ext.define('Asher.view.field.SpinnerField', {
	 extend : 'Ext.form.field.Spinner'
    ,uses   : ['Asher.util.CommonFn']
    ,xtype  : 'numspinner'
    ,width  : 80
    ,vtype  : 'number'
    ,onSpinUp : function() {
		 Asher.util.CommonFn.showLog(true, '', this.id);
		 var spCmp = Ext.getCmp(this.id);
		 var aug = this.aug || 1;
		 spCmp.setValue(Number(spCmp.getValue()) + aug);
	}
    ,onSpinDown : function() {
    	var spCmp = Ext.getCmp(this.id);
    	var aug = this.aug || 1;
    	if(spCmp.getValue() == '0') return;
    	spCmp.setValue(Number(spCmp.getValue()) - aug);
    }
});