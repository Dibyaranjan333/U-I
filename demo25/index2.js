var app = angular.module('main', [])
app.factory('Factory', ['$http', function ($http) {
	return {
		data: function () {
			return $http.get('http://localhost:3000/obj');
		}
	}
}
]);
app.controller('Mcrt', ['$scope', 'Factory', function ($scope, Factory)
{
	$scope.righticon = [];
	$scope.nval = false;
	Factory.data().then(
		function resolved(response) 
		{
			$scope.data = response.data;
		},
		function rejected(response)
		 {
			alert(response.status + ': ' + response.statusText);
		}
	);
	$scope.slide = function () 
	{
		$scope.nval=!$scope.nval;
		for(var i = 0; i < $scope.data.length; i++)
		{
			if($scope.data[i].sub.length > 1)
				{
					$scope.righticon[i]='fa fa-chevron-right';
				}
			else
				{
					$scope.righticon[i]='';
				}
			if(!$scope.nval)
				{
					$scope.righticon[i]='';
				}
		}
	};
	$scope.subChild = [];
	$scope.toggle = function (index) 
	{	
		$scope.active = [];
		$scope.subChild[index] = !$scope.subChild[index];
		for (var i = 0; i < $scope.data.length; i++) 
		{
			if (i != index) 
			{
				$scope.subChild[i] = false;
				$scope.active[i]=false;	
			}
			console.log(i);
		}
			$scope.active[index]=true;	
	};
}
]);
