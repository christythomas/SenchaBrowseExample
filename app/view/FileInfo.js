/**
 * Displays file information
 */
Ext.define('loomis.view.FileInfo',{
	extend: 'Ext.Panel',
	xtype: 'fileinfo',
	config: {
		centered: true,
		modal: true,
		hideOnMaskTap: true,
		width: '85%',
		height: '85%',
		layout: 'fit',
		styleHtmlContent: true,
		scrollable: true,
		items: [{
			xtype: 'toolbar',
        	docked: 'top',
			title: 'File Information',
			items: [{
				docked: 'right',
				iconCls: 'delete',
				handler: function(me){
					me.up('fileinfo').hide();
				}
			}]
		}],
		tpl: Ext.create( 'Ext.XTemplate',
			'<div class="details-header">Name: {text}</div>',
			'<div class="details-header">Author: {author}</div>',
			'<div class="details-header">Creation Date: {[this.getDateFormat(values.createdate)]}</div>',
			'<div class="details-header">Type: {type}</div>',
			'<div class="details-header">Size: {size} bytes</div>',
			'<div class="details-header">Filename: {filename}</div>',
			'<div class="details-header">Path: {path}/</div>',
			{
				getDateFormat: function(createdate){
					var date = new Date(createdate);
					date = Ext.isDate(date) ? Ext.Date.format(date, 'M d, Y H:i') : '';
					return date;
				},
				compiled: true
			}
		)
	}
});