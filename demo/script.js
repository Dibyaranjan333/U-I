	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'login.html',
			
			});

			// route for the contact page
			.when('/contact', {
				templateUrl : 'singup.html',
				
			});
	});
	
	
