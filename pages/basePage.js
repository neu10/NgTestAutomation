var BasePage = function(){
	
	//we can hit any URL by using this method
	this.navigateToURL = function(url) {
		browser.ignoreSynchronization = true ;
		browser.get(url);
	};
	
	//we can get title of any page using this method
	this.getPageTitle = function(){
		
		return browser.getTitle();
	};
	
	//This will send browser for sleep for specified time peroid
	this.goToSleep = function(noOfMilliSeconds){
		
		browser.sleep(noOfMilliSeconds);
	};
	
	//This will give current page URl
	this.getCurrentUrl = function(){
		
		return browser.getCurrentUrl();
	};
};

module.exports = new BasePage();