var scotchApp = angular.module('scotchApp', ['ngRoute']);
	scotchApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/login.html'
			})
			.when('/contact', {
				templateUrl : 'pages/newuser.html'		
			}).when('/dashboard', {
				templateUrl : 'pages/dashboard.html',
			})
			.when('/log', {
				templateUrl : 'pages/login.html'
			});
			
	});
	