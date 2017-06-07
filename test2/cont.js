var app=angular.module('scotchApp');
 app.controller('myCtrl', function($scope,tableFactory) 
 {
  
          tableFactory.method()
            .success(function (studs) {
                $scope.myWelcome = studs;
            })
            // .error(function (error) {
                // $scope.status = 'Unable to load customer data: ' + error.message;
            // });
			$scope.value=true;
			$scope.showme=function(x){
				//$scope.value = $scope.value ? false : true;
				//console.log(x);
				$scope.value=false;
				$scope.val=x.emp;
			}
	$scope.subAllMenu=[];
	$scope.c=false;
	$scope.mainMenu=function(p)
	{ 
	debugger;
	$scope.value=true;
	// console.log(p);
	if($scope.c==true)
	{
		$scope.subAllMenu=[];
		if(($scope.q)!=p)
		{
			$scope.subAllMenu[p] = true;
			$scope.v=p;
		}
		
		$scope.c=false;
	}
	else
	{
		$scope.subAllMenu=[];
		$scope.subAllMenu[p] = true;
		$scope.q=p;
		$scope.c=true;
	}
	
	
	
	
	
	
	
	
	  /* if((p.co>0)||(p.co1>0)||(p.co2>0))
	   {   
		switch(p.name){
						   
						   case "one":$scope.one=true;$scope.two=false;$scope.three=false;p.co=p.co*(-1);
								  break;
						   case "two":$scope.two=true;$scope.one=false;$scope.three=false;p.co1=p.co1*(-1);
								 break;
						   case "three":$scope.three=true;$scope.one=false;$scope.two=false;p.co2=p.co2*(-1);
								 break;							 
						   
				      }
	   }
		else
		{
			  if(p.co<0)
			  {
				  $scope.one=false;
				  p.co=p.co*(-1);
			  }
			  else
			  { 
		             if(p.co1<0)
					 {
						 $scope.two=false;
						 p.co1=p.co1*(-1);
					 }
					 else
					 {
						 $scope.three=false;
						 p.co2=p.co2*(-1);
					 }
			  } 
		}	*/   
	}	
	$scope.myFunction2=function(){
		
		// console.log("thfxtui");
   setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
  });