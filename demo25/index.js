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
			
			$scope.tmp=$scope.data[x].sub;
			$scope.clas=$scope.data[x].clas;
			
		};	
		$scope.hoverIn = function(){
        $scope.hoverEdit = true;
		};
		$scope.hoverOut = function(){
			$scope.hoverEdit = false;
		};
		$scope.slide=function(){
			var myEl = angular.element( document.querySelector( '.subnav' ) );
			var navslider = angular.element( document.querySelector( '.sidenav >ul' ) );
			var dashmove = angular.element( document.querySelector( '.dash' ) );
			if($scope.nval==false)
				{
					myEl.removeClass('slider');
					navslider.css('width','30px');
					dashmove.css('marginLeft','80px');
					$scope.nval=true;
				}
			else
				{
				myEl.addClass('slider');	
				navslider.css('width','210px');	
				dashmove.css('marginLeft','260px');
				$scope.nval=false;																								
				}
		};
		$scope.dropfunc=function(x)
		{	
			console.log(x);
	
			switch (x) {
            case 0:
                break;
            case 1:
                $scope.emp=$scope.data[x].sub;
				var dd = angular.element( document.querySelector( '#nd2' ) );
				dd.css('height','350px');				
                break;
			case 2:
                $scope.emp=$scope.data[x].sub;
                break;
			case 3:
               $scope.emp=$scope.data[x].sub;
                break;
			case 4:
               $scope.emp=$scope.data[x].sub;
                break;
			case 5:
               $scope.emp=$scope.data[x].sub;
                break;
			case 6:
                $scope.emp=$scope.data[x].sub;
                break;
			
			

        }
		}
		
		
    }
]);
