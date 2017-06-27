var app = angular.module('main', ['ngRoute'])
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
	$scope.toggle = function (index,x) 
	{	
		$scope.active = [];
		$scope.subrighticon = [];
		$scope.subChild[index] = !$scope.subChild[index];
		for (var i = 0; i < $scope.data.length; i++) 
		{
			if (i != index) 
			{
				$scope.subChild[i] = false;
				$scope.active[i]=false;	
			}
		}
			$scope.active[index]=true;

		//console.log(x);
		//console.log(x.length);
		for(var i = 0; i < x.length; i++)
		{	
			 if(x[i].IconSub != undefined)
			 {
			 	$scope.subrighticon[i]='fa fa-chevron-right';
			 }
			
			//console.log($scope.data[index].sub[i].IconSub);
		}	
	};
	$scope.subchild2=[];
	$scope.subtoggle=function(index)
	{	
		console.log(index);
		$scope.subchild2[index] = !$scope.subchild2[index];
		
	}
	$scope.subchild3=false;
	$scope.subtoggle2=function()
	{	
		$scope.subchild3=!$scope.subchild3;
	}
}
]);
