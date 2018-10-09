Ext.define('DemoReg.store.AdminDashboardStore', {
    extend: 'Ext.data.Store',

    alias: 'store.adminDashboardStore',
	 autoLoad: true,
	fields: [
         'fName', 'lName','company','email','state',{name:'dob',dateFormat: 'm/d/Y',type:'date'},'gender'
    ],

    /*data: { items: [
        {fName:'Keval',lName:'Patel',company:'Virtusa',email:'kp@gmail',dob:'02/21/1994',gender:'Male',state:'Gujarat'}
    ]},*/

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
