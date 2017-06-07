app.factory("tableFactory",function($http)
{
	 var urlBase="http://localhost:3000/test";
	var facobj={};
	facobj.method=function(){
		return $http.get(urlBase);
	}
   return  facobj; 	
 });