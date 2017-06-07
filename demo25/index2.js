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
	$scope.nval=true;
	$scope.side=false;
        Factory.data().then(
            function resolved (response) {
                $scope.data = response.data;
				//console.log($scope.data[1].sub);
            },
            function rejected (response) {
                alert(response.status + ': ' + response.statusText);
            }
        );
		$scope.show=function(x){
		
			$scope.tmp=$scope.data[x];
			$scope.clas=$scope.data[x].clas;
			$scope.val=$scope.tmp.clas;
				
		};	
		$scope.hoverIn = function(){
        $scope.hoverEdit = true;
		};
		$scope.hoverOut = function(){
			$scope.hoverEdit = false;
		};
		$scope.slide=function()
								{   debugger;
									var myEl = angular.element( document.querySelector( '.nav1' ) );
									var navslider = angular.element( document.querySelector( '.sidenav li' ) );
									var dashmove = angular.element( document.querySelector( '.dash' ) );
									if($scope.nval==false)
										{	
											myEl.removeClass('slider');
											navslider.css('width','70px');
											dashmove.css('marginLeft','80px');
											$scope.nval=true;
										}
									else
										{
										myEl.addClass('slider');	
										navslider.css('width','250px');	
										dashmove.css('marginLeft','260px');
										$scope.nval=false;																								
										}
								};
		
    }
]);
