/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.users.DemoUserModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.demoUser',

    stores: {
        userData:{
            fields:['name','email','country'],
            data:[{
                        name:'Keval',
                        country:'India',
                        email:'kevalpatel2102@rocketmail.com'
                    },{
                        name:'Alex',
                        country:'Germany',
                        email:'alexford@yahoo.com'
                    },{
                        
                        name:'Alisa',
                        country:'France',
                        email:'Alisamayami@yahoo.com'
                    
                    }]
        }
    },
    formulas:{
        numberofUser:function(get){
            
            return this.getData().userData.count();
        }
    }
});
