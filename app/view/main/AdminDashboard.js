/**
 * This view is an example list of people.
 */
Ext.define('DemoReg.view.main.AdminDashboard', {
    extend: 'Ext.grid.Panel',
    xtype: 'adminDashboard',

    requires: [
        'DemoReg.store.AdminDashboardStore',
		 'Ext.selection.CellModel'
    ],

    title: 'User Information',
    frame:true,
    width: '100%',
	minHeight:300,
    autoLoad: true,
	store: Ext.create('DemoReg.store.AdminDashboardStore',{}),
	 selModel: {
        type: 'cellmodel'
    },
	listeners:{
		afterrender: 'adminDashboardAfterrender'
	},
	 tbar: [{
        text: 'Add User',
        handler: 'onAddClick'
    },{
		text: 'Delete User',
        handler: 'onDeleteClick'
	},{ 
		text: 'Update User',
        handler: 'onUpdateClick'
	}],

	  columns: [{
        header: 'First Name',
        dataIndex: 'fName',
		sortable:false,
        flex: 1,
        editor: {
            allowBlank: false
        }
    }, {
        header: 'Last Name',
        dataIndex: 'lName',
		sortable:false,
        flex: 1,
		 editor: {
            allowBlank: false
        }
    }, {
        header: 'Company',
        dataIndex: 'company',
		flex: 1,
		editor: {
            allowBlank: false
        },
       sortable:false
    }, {
		 header: 'Email Id',
        dataIndex: 'email',
		flex: 1,
		sortable:false,
		editor: {
            allowBlank: false
        }
	},{
		header: 'State',
        dataIndex: 'state',
		flex: 1,
		sortable:false,
		editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: [ 'Gujarat','Maharastra','Karnatak']
        }
	},{
        xtype: 'datecolumn',
        header: 'Date Of Birth',
        dataIndex: 'dob',
        flex:1,
		sortable:false,
        format: 'M d, Y',
        editor: {
            xtype: 'datefield',
            format: 'm/d/y',
            maxValue: new Date()
        }
    },{
		header: 'Gender',
		sortable:false,
        dataIndex: 'gender',
		flex: 1,
		editor: {
            xtype: 'combo',
            store: ['Male','Female']
        }
	}],
	plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    }

});
