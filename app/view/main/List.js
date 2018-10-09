/**
 * This view is an example list of people.
 */
Ext.define('DemoReg.view.main.List', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist',

    requires: [
        'DemoReg.store.Personnel'
    ],

    title: 'Admin Login',
    frame:true,
    width: 320,
	bodyPadding:20,
    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }],

    buttons: [{ 
			text:'Login',
			itemId:'login_Button',
			listeners:{
				click:'adminLogin'
			}
		}]

});
