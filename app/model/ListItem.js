/**
* Model to represent each item in the tree.
* @author Christy Thomas
*/
 Ext.define('loomis.model.ListItem', {
     extend: 'Ext.data.Model',
	 xtype: 'listitem',
     config: {
         fields: [{
             name: 'text',
             type: 'string'
         },{
			name: 'author',
			type: 'string'
		 },{
			name: 'createdate', 
			type: 'int'
	     },{
			name: 'type',
			type: 'string'
		 },{
			name: 'size',
			type: 'int'
		 },{
			name: 'filename',
			type: 'string'
		 },{
			name: 'path',
			type: 'string'
		 }]
     }
 });