var demo = angular.module('myApp', ['ui.bootstrap']);
demo.controller("myCtrl", function($rootScope, $scope,$location) {
    $rootScope.items = [
							{ 'name':'Infosys Technologies','try1':'true'},
							{ 'name':'Cognizant Technologies','try1':'true'},
							{ 'name':'Wipro','try1':'true'},
							{ 'name':'Tata Consultancy Services (TCS)','try1':'true'},
							{ 'name':'HCL Technologies','try1':'true'},
						];
	$rootScope.iteml=$rootScope.items.length;
	$rootScope.count=0;
	$scope.new1 = 'New';
	$scope.show=false;
	 $scope.myFunc = function() {
      if($scope.show==true){
		  $scope.show=false;
	  }
	  else{
		  $scope.show=true;
	  }
    };
	$scope.remove=function(x){
	  delete $rootScope.items[x];  
  };
});
demo.controller('demoController', function($rootScope,$modal) {
  this.modal = function() {
    $modal.open({
		templateUrl: 'demo.html',
      controller: 'modalController as modal'
    });
  };
})
demo.controller('modalController', function($rootScope,$modalInstance) {
  this.modalText = 'Modal Text'
  $rootScope.name = '';
  this.cancel = function() {
    $modalInstance.dismiss();
  }
  this.save=function(x){
	 $rootScope.items.push({ 'name':x,'try1':'true'});
		$modalInstance.dismiss();
  };
})