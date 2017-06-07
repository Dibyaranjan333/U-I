var demo = angular.module('myApp', ['ui.bootstrap']);
demo.controller("myCtrl",['$scope','fserv' ,'$modal',function( a, fserv,$modal) {
	a.items =fserv.sayHello();
	a.new1 = 'New';
	a.show=false; 
	a.head=fserv.head().name;
	a.myFunc = function() {
      if(a.show==true){
		  a.show=false;
		  var myEl = angular.element( document.querySelector( '#rclass' ) );
		  myEl.removeClass('fa-caret-up');
		  myEl.addClass('fa-caret-down'); 
	  }
	  else{
		  a.show=true;
		  var myEl = angular.element( document.querySelector( '#rclass' ) );
		  myEl.removeClass('fa-caret-down');
		  myEl.addClass('fa-caret-up'); 
	  }
    };
	a.remove=function(x){
		fserv.fdelete(x);
		
  };
  a.modal = function() {
    $modal.open({
		 backdrop  : 'static',
   keyboard  : false,
		templateUrl: 'demo.html',
      controller: 'modalController as modal'
    });
  };
  a.change=function(x){
	  fserv.change(x);
	  a.head=fserv.head().name;
  };  
}]);
demo.controller('modalController',['$modalInstance','fserv',function($modalInstance,fserv) {
  this.modalText = 'Modal Text'
  this.cancel = function() {
    $modalInstance.dismiss();
  }
  this.save=function(x){
	  
	  fserv.fadd(x);
	  $modalInstance.dismiss();
  };
}]);
demo.factory('fserv', function() {
	  var obj = {};
	  obj.tmp;
	   obj.data = [			{ 'name':'Infosys Technologies','try1':'true'},
							{ 'name':'Cognizant Technologies','try1':'true'},
							{ 'name':'Wipro','try1':'true'},
							{ 'name':'Tata Consultancy Services ','try1':'true'},
							{ 'name':'HCL Technologies','try1':'true'},
				  ];
		obj.sayHello = function() {
            return obj.data;
        }
		obj.fdelete=function(x){
			obj.data.splice(x,1);
		}
		obj.fadd=function(x){
			 obj.data.push({ 'name':x,'try1':'true'});
		}
		obj.head = function() {
            return obj.data[0];
		
        }
		obj.change=function(x){
			obj.tmp=obj.data[0];
			obj.data[0]=obj.data[x];
			obj.data[x]=obj.tmp;	
		}
    return obj;
});