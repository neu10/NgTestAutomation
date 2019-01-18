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
  
 /* specs: ['./test_specs/Admin_Function.js' , './test_specs/Workflow_Function.js' , './test_specs/NED_Validation_Function.js' , 
	      './test_specs/OS_Upgrade_Function.js'  , './test_specs/Templates_Function.js' , './test_specs/Services_Function.js' ,
	       './test_specs/Form_Builder_Function.js' ,'./test_specs/Device_Manager_Function.js'     
		  ],*/
  
  specs: [ './test_specs/adminFunctions.js' , 
						'./test_specs/RPD_Staging.js' , 
						'./test_specs/Workflow_Function.js' ],
  
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