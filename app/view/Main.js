/*
Document Browser

A Sencha Touch application which lets users browse a (network share) location 
consisting of nested folders and files (documents).
Functionality should include: browse, view document properties 
(author, create date, type, size), view/download documents.

For the purpose of this application the data doesn't have to be real 
(using static data store is fine)

Bonus: building a custom Sencha theme for the app.
Styling should include minimum color (black and white preferred), no gradients, no rounded corners in buttons

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
