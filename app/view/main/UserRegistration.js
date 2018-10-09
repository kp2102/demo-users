/**
 * This view is an example list of people.
 */
Ext.define('DemoReg.view.main.UserRegistration', {
    extend: 'Ext.form.Panel',
    xtype: 'userRegistration',

    requires: [
        'DemoReg.store.UserRegistrationStore'
    ],

    title: 'User Registration',
    frame:true,
	bodyPadding: 10,
    scrollable:true,
    width: 355,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

     items: [{
        xtype: 'fieldset',
        title: 'Contact Information',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            emptyText: 'First Name',
            name: 'fName',
			allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            emptyText: 'Last Name',
            name: 'lName',
			allowBlank: false
        }, {
            fieldLabel: 'Company',
            name: 'company',
			allowBlank: false
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email',
			allowBlank: false
        }, {
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'state',
			allowBlank: false,
            store: [ 'Gujarat','Maharastra','Karnatak'],
            valueField: 'state',
            displayField: 'state',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a state...'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            allowBlank: false,
            maxValue: new Date()
        },{
            xtype: 'radiogroup',
			fieldLabel: 'Gender',
			name:'gender',
            items: [{
                boxLabel: 'Male',
                inputValue: 'male',
                checked: true
            }, {
                boxLabel: 'Female',
                inputValue: 'female'
            }]
        }]
    }],

    buttons: [{
        text: 'Register',
		listeners:{
				click:'registerUser'
			}
    }]

});
