	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	scotchApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/about', {
				templateUrl : 'pages/home.html',
				controller  : 'aboutController'
			})
			.when('/contact', {
				templateUrl : 'pages/home.html',
				controller  : 'contactController'
			});
	});
	scotchApp.controller('mainController', function($scope,hexafy) {
		$scope.page='Home Page';
		$scope.AddNumbers = function() {
			//console.log( (!isNaN($scope.a)) &&(!isNaN($scope.b)));
			if( (!isNaN($scope.a)) &&(!isNaN($scope.b)))
			{
				
				$scope.res = hexafy.myFunc($scope.a,$scope.b);
				
			}
			else{
				
				alert('enter a number')
			}
			
        }	
	});
	scotchApp.controller('aboutController', function($scope,hexafy) {
		$scope.page='About us';
		$scope.AddNumbers = function() {
			$scope.res = hexafy.myFunc($scope.a,$scope.b);
        }
	});
	scotchApp.controller('contactController', function($scope,hexafy) {
		$scope.page='contact us';
		$scope.AddNumbers = function() {        
         $scope.res = hexafy.myFunc($scope.a,$scope.b);
        }
	});
scotchApp.service('hexafy', function() {
    this.myFunc = function (x,y) {
        return x*y;
    }
});