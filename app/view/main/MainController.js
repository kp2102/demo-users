/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoReg.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    adminLogin : function(cmp){
	
		 if(this.view.down('#adminTabId').down('form').isValid()){
			   this.view.down('#adminTabId').setDisabled(true);
			   this.view.down('#userRegId').setDisabled(true);
			   this.view.down('#dashboardTabId').setDisabled(false);
			   this.view.setActiveItem(2);
		  }
	},

	registerUser : function(cmp){
	
		if( this.view.down('#userRegId').down('form').isValid()){
			  var newUserData = cmp.up('form').getValues();
			  var userData = localStorage.getItem('userData');
				  if(Ext.isEmpty(userData)){
					userData = [];
				  }else{
				   userData = JSON.parse(userData);
				  }
			  userData.push(newUserData);
			  localStorage.setItem('userData',JSON.stringify(userData));
			  cmp.up('form').getForm().reset();
			  Ext.MessageBox.alert('Info','Thank you for registration.');
		 }

	},
	logoutButton:function(cmp){
	  this.view.down('#adminTabId').setDisabled(false);
	  this.view.down('#userRegId').setDisabled(false);
	  this.view.down('#dashboardTabId').setDisabled(true);
	  this.view.setActiveItem(0);
	},
	onAddClick:function(cmp){
		cmp.up('grid').getStore().insert(0,{});
		this.updateDataInlocal(cmp);
	},
	onDeleteClick:function(cmp){
		var gridCmp =cmp.up('grid');
		var index = gridCmp.getSelectionModel().getPosition().rowIdx;
		gridCmp.getStore().removeAt(index);
		this.updateDataInlocal(cmp);
	},
	onUpdateClick:function(cmp){
		cmp.up('grid').getStore().commitChanges();
		this.updateDataInlocal(cmp);
	},

	adminDashboardAfterrender:function(grid){
		var userDataToShow = localStorage.getItem('userData');
		if(Ext.isEmpty(userDataToShow)){
			userDataToShow = [];
		}else{
			userDataToShow = JSON.parse(userDataToShow);
		}
		grid.getStore().loadData(userDataToShow,false);
	},

    updateDataInlocal:function(cmp){
		var userData = cmp.up('grid').getStore().getRange();
		localStorage.setItem('userData',JSON.stringify(Ext.Array.pluck(userData,'data')));
	}
});
