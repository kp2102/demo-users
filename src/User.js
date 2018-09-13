/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Demo.users.User', {
    extend: 'Ext.window.Window',
    xtype: 'userPopup',
	scrollable:true,
	height:'50%',
	width:'75%',
	constrain:true,
	title:'User Information',
    requires: [
        'Ext.plugin.Viewport',
		'Demo.users.DemoUserModel',
		'Demo.users.DemoUserController'
    ],

    controller: 'demoUser',
    viewModel: 'demoUser',
	items:[{
        xtype:'displayfield',
        padding: '15', 
        fieldLabel: 'Number of Users',
        labelWidth: '100%',
        bind: {
            value:'{numberofUser}'
        }
    },{
        xtype :'grid',
        padding: '15', 
        bind:{
            store:'{userData}'
        },
        title:'User Grid',
        columns: [{
            header: 'Name of User',
            align:'center',
            dataIndex: 'name',
            flex: 1
        },{
             header: 'Country',
             align:'center',
            dataIndex: 'country',
            flex: 1
        },{ 
            header: 'Email Id',
            align:'center',
            dataIndex: 'email',
            width: 230,
            flex: 1
        }]
    }]
});
