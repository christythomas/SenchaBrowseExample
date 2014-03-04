/**
* Store for the list of items in the tree and loaded from the data.json file.
* @author Christy Thomas
*/
Ext.define( 'loomis.store.ListTree', {
	extend: 'Ext.data.TreeStore',
	requires: 'loomis.model.ListItem',
	config: {
		model: 'loomis.model.ListItem',
		proxy: {
			type: 'ajax',
			method: 'GET',
			url: 'data.json',
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
 });