var jsonObject = require('../json/config.json');
var base_page = require('../pages/basePage.js');


var adminPage = function(){

	var current_URL ;
	
	this.validLogin = function(userName , password){
		
		element(by.id('mdl-textfield-0')).sendKeys(userName);
		element(by.id('mdl-textfield-1')).sendKeys(password);
		element(by.buttonText('Login')).click();
		
		current_URL = base_page.getCurrentUrl();		
		expect(current_URL).toEqual(jsonObject.login_URL);	
		base_page.goToSleep(2000);
		};
	
		
		this.validate_URL = function(){		
			current_URL = base_page.getCurrentUrl();		
			expect(current_URL).toEqual(jsonObject.home_page_URL.home_URL);	
			base_page.goToSleep(2000);
		};
		
		this.profile = function(){
			element(by.css('.menu-btn.mdl-button.mdl-button--icon')).click();		
			var EC = protractor.ExpectedConditions;
			var profile = element(by.css('.mdl-menu mdl-menu-item[routerlink="/profile"]'));
			browser.wait(EC.elementToBeClickable(profile), 3000);
			profile.click();
			
			current_URL = base_page.getCurrentUrl();
			expect(current_URL).toEqual(jsonObject.profile_URL);	
			base_page.goToSleep(2000);
			base_page.navigateToURL(jsonObject.home_URL);			
			};
			
	
		this.admin = function(){
			element(by.css('.menu-btn.mdl-button.mdl-button--icon')).click();
			
			var EC = protractor.ExpectedConditions;
			var admin = element(by.css('mdl-menu mdl-menu-item[routerlink="/admin"]'));
			browser.wait(EC.elementToBeClickable(admin), 3000);
			admin.click();
			
			current_URL = base_page.getCurrentUrl();
			expect(current_URL).toEqual(jsonObject.admin_URL);	
			base_page.goToSleep(2000);
			base_page.navigateToURL(jsonObject.home_URL);
			};
			
			 
			
};

module.exports = new adminPage();