var app = angular.module('main', [])
app.factory('Factory', ['$http', function ($http) {
	return {
		data: function () {
			return $http.get('http://localhost:3000/obj');
		}
	}
}
]);
app.controller('Mcrt', ['$scope', 'Factory', function ($scope, Factory) {
	$scope.nval = false;
	$scope.subChild = [];
	
	$scope.slideclass = 'slideroff';
	$scope.dropmenu = 'submenu';
	$scope.slidedrop = false;
	$scope.dropvar = false;
	$scope.temp = null;
	Factory.data().then(
		function resolved(response) {
			$scope.data = response.data;
		},
		function rejected(response) {
			alert(response.status + ': ' + response.statusText);
		}
	);
	$scope.slide = function () {
		// var dashmove = angular.element(document.querySelector('.dash'));
		// if ($scope.nval == true) {
		// 	$scope.slideclass = 'slideroff';
		// 	dashmove.css('marginLeft', '80px');
		// 	$scope.nval = false;
		// 	$scope.dropmenu = 'submenu';
		// 	$scope.slidedrop = false;
		// }
		// else {
		// 	$scope.slideclass = 'slideron';
		// 	dashmove.css('marginLeft', '260px');
		// 	$scope.nval = true;
		// 	$scope.dropmenu = 'submenudrop';
		// 	$scope.slidedrop = true;
		// }

		$scope.nval=!$scope.nval;
	};
	// $scope.dropit = function (x, y) {
	// 	$scope.select = y;

	// 	if ($scope.select == $scope.temp) {
	// 		if ($scope.dropvar == false) {
	// 			$scope.xid = x;
	// 			$scope.dropvar = true;
	// 		}
	// 		else {
	// 			$scope.xid = '';
	// 			$scope.dropvar = false;
	// 		}

	// 		$scope.temp = $scope.select;
	// 	}
	// 	else {
	// 		$scope.xid = x;
	// 		$scope.temp = $scope.select;
	// 	}
	// };
	// $scope.dropitover = function (x) {
	// 	console.log(x);
	// 	$scope.xid = x;
	// };

	
	$scope.toggle = function (index) {
		$scope.subChild[index] = !$scope.subChild[index];
		console.log($scope.data);
		console.log($scope.data[0].sub.length);
		for (var i = 0; i < $scope.data.length; i++) {
			if (i != index) {
				$scope.subChild[i] = false;
			}

	}
}
}
]);
