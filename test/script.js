	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/login.html',
				//controller  : 'mainController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/newuser.html',
				//controller  : 'contactController'
			}).when('/dashboard', {
				templateUrl : 'pages/dashboard.html',
				//controller  : 'contactController'
			})
			.when('/log', {
				templateUrl : 'pages/login.html',
				//controller  : 'contactController'
			});
			
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	
	
	/*var app = angular.module('myapp', ['UserValidation']);

angular.module('UserValidation', []).directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
})*/
	//With a function, I am able to perform multiple tasks 
function SwitchButtons(buttonId) {
  var hideBtn, showBtn, menuToggle;
  if (buttonId == 'button1') {
    menuToggle = 'menu2';
    showBtn = 'button2';
    hideBtn = 'button1';
  } else {
    menuToggle = 'menu3';
    showBtn = 'button1';
    hideBtn = 'button2';
  }
  //I don't have your menus, so this is commented out.  just uncomment for your usage
  // document.getElementById(menuToggle).toggle(); //step 1: toggle menu
  document.getElementById(hideBtn).style.display = 'none'; //step 2 :additional feature hide button
  document.getElementById(showBtn).style.display = ''; //step 3:additional feature show button


}