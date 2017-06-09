var app = angular.module('main',[])	
app.factory('Factory', ['$http',function($http){
        return {
            data: function () {
                return $http.get('http://localhost:3000/obj');
            }
        }
    }
]);
app.controller('Mcrt',['$scope', 'Factory',function ($scope,Factory){
	$scope.nval=false;
	$scope.slideclass='slideroff';
	$scope.dropmenu='submenu';
	$scope.slidedrop=false;
	$scope.dropvar=false;
        Factory.data().then(
            function resolved (response) {
                $scope.data = response.data;
            },
            function rejected (response) {
                alert(response.status + ': ' + response.statusText);
            }
        );
	
		$scope.slide=function()
								{   
									var dashmove = angular.element( document.querySelector( '.dash' ) );
									if($scope.nval==true)
										{	
											$scope.slideclass='slideroff';
											dashmove.css('marginLeft','80px');
											$scope.nval=false;
											$scope.dropmenu='submenu';
											$scope.slidedrop=false;
										}
									else
										{	
											$scope.slideclass='slideron';
											dashmove.css('marginLeft','260px');
											$scope.nval=true;
											$scope.dropmenu='submenudrop';
											$scope.slidedrop=true;																	
										}
								};
		$scope.dropit=function(x)
		{
				$scope.xid=x;
		};




		}
    
]);
