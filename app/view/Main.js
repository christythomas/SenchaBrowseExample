/**
* Document Browser
* 
* Nested List that allows you to browse files and view file information.
* @author Christy Thomas
*
*/

Ext.define('loomis.view.Main', {
    extend: 'Ext.NestedList',
    xtype: 'main',
    requires: [
		'loomis.store.ListTree',
		'loomis.view.FileContents'
    ],
    config: {
		fullscreen: true,
		title: 'Network Shares',
		displayField: 'text',
		toolbar: {
			items: [{
				iconCls: 'download',
				id: 'downloadButton',
				hidden: true
			},{
				iconCls: 'info',
				id: 'infoButton',
				hidden: true
			}]
		}
    },
	
	initialize: function(){
		var detailCard = Ext.create('loomis.view.FileContents'),
			store = Ext.create('loomis.store.ListTree');
		this.setDetailCard( detailCard );
		this.setStore( store );
		this.callParent();
	},
	
	getItemTextTpl: function(node){
		return '<div>{' + this.getDisplayField() + '}<tpl if="leaf !== true">/</tpl></div>';
	}

});
