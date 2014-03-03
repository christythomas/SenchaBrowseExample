
Ext.define('loomis.controller.Browse', {
	extend: 'Ext.app.Controller',
	requires: [
		'loomis.view.FileInfo',
		'loomis.view.FileContents',
		'loomis.view.Main'
	],
	config: {
		refs: {
			tree: 'main',
			fileContents: 'filecontents',
			downloadButton: '#downloadButton',
			infoButton: '#infoButton',
			fileInfo: {
				selector: 'fileinfo',
                xtype: 'fileinfo',
                autoCreate: true
            }
		},
		control: {
			tree: {
				leafitemtap: 'onTreeLeafTap',
				activeitemchange: 'onActiveItemChange'
            },
            infoButton: {
                tap: 'onInfoTap'
            },
			downloadButton: {
				tap: 'onDownloadTap'
			}
		},
		views: [
			'FileInfo',
			'FileContents',
			'Main'
		],
		stores: [
			'ListTree'
		]
	},
	
	/**
	 * Hides or shows buttons based on when the file view is being shown
	 */
	
	onActiveItemChange: function(me, value){
		var downloadButton = this.getDownloadButton(),
		    infoButton = this.getInfoButton();
		if( value.xtype == "filecontents" ){
			downloadButton.show();
			infoButton.show();
		}else{
			downloadButton.hide();
			infoButton.hide();
		}
	},
	
	onInfoTap: function(){
		var fileInfo = this.getFileInfo(),
			fileContents = this.getFileContents();
		
		fileInfo.setRecord(fileContents.getRecord());
		Ext.Viewport.add( fileInfo );
		fileInfo.show();
	},
	
	onDownloadTap: function(){
		var fileContents = this.getFileContents(),
			record = fileContents.getRecord();
		Ext.device.Device.openURL( record.get('path') + '/' + record.get('filename'));
	},

    onTreeLeafTap: function(me, list, index, item, e) {
		var store = list.getStore(),
			record  = store.getAt(index),
			detailCard = me.getDetailCard();

		list.setMasked({
			xtype: 'loadmask',
			message: 'Loading'
		});
		
		detailCard.setRecord(record);

		Ext.Ajax.request({
			url: './' +record.get('path') + '/' + record.get('filename'),
			success: function(response) {
				detailCard.setHtml(response.responseText);
				list.unmask();
			},
			failure: function() {
				detailCard.setHtml("Loading failed.");
				list.unmask();
			}
		});
	}
	
});