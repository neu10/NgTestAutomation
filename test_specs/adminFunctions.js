var config = require('../json/config.json');
var admin_page = require('../pages/adminPage.js');
var base_page = require('../pages/basePage.js');


describe("Login Function Test" , function(){
	 
	beforeEach(function(){
			
			base_page.goToSleep(2000);
			
		});	

	afterEach(function(){
		
		base_page.goToSleep(2000);
		
	});	 
	it("Should login Successfully" , function(){
		 
		
		base_page.navigateToURL(config.login_URL);
		admin_page.validLogin(config.locators.ValidCredentials.username , config.locators.ValidCredentials.password);
	});
		 
	it("Should validate homepage URL" , function(){
		 
		
		admin_page.validate_URL();
	});
});