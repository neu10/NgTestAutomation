exports.config = {
  directConnect: true,
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  framework: 'jasmine',
  
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  
//Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  
  
  specs: [ './test_specs/adminFunctions.js' ],
  
  onPrepare: function () {
	  
			var AllureReporter = require('jasmine-allure-reporter');
			require("babel-register");
  		require("babel-core/register")({presets: ["es2015"]});
	    jasmine.getEnv().addReporter(new AllureReporter());
	    
	    jasmine.getEnv().afterEach(function(done){
	      browser.takeScreenshot().then(function (png) {
	        allure.createAttachment('Screenshot', function () {
	          return new Buffer(png, 'base64')
	        }, 'image/png')();
	        done();
	      })
	    });
	    
	  }
  
}