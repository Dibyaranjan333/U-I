var app = angular.module('main', ['ui.router'])
app.factory('Factory', ['$http', function ($http) {
	return {
		data: function () {
			return $http.get('http://localhost:3000/obj');
		}
	}
}
]);
app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('Button', {
            url: "/button",
            templateUrl: "page/ui-element/button.html"
        })
        .state('General', {
            url: "/General",
            templateUrl: "page/ui-element/General.html"
        })
        .state('Tabs', {
            url: "/Tabs",
            templateUrl: "page/ui-element/Tabs.html"
        })
		.state('Progress Bars', {
            url: "/Progress",
            templateUrl: "page/ui-element/Progress.html"
        })
        .state('Pagination', {
            url: "/Pagination",
            templateUrl: "page/ui-element/Pagination.html"
        })
        .state('Sliders', {
            url: "/Sliders",
            templateUrl: "page/ui-element/Sliders.html"
        })
		.state('Portlets', {
            url: "/Portlets",
            templateUrl: "page/ui-element/Portlets.html"
        })
        .state('Notifications', {
            url: "/Notifications",
            templateUrl: "page/ui-element/Notifications.html"
        })
        .state('Alerts', {
            url: "/Alerts",
            templateUrl: "page/ui-element/Alerts.html"
        })
		// .state('Icons', {
        //     url: "/route3",
        //     templateUrl: "page/file3.html"
        // })
                .state('IconsFontawesome', {
                    url: "/IconsFontawesome",
                    templateUrl: "page/ui-element/Alerts.html"
                })
                .state('IconsFeather', {
                    url: "/IconsFeather",
                    templateUrl: "page/ui-element/Alerts.html"
                })
                .state('IconsClimacon', {
                    url: "/IconsClimacon",
                    templateUrl: "page/ui-element/Alerts.html"
                })



		.state('Basic Forms', {
            url: "/BasicForms",
            templateUrl: "page/BasicForms.html"
        })
        .state('Advanced Components', {
            url: "/AdvancedComponents",
            templateUrl: "page/forms/AdvancedComponents.html"
        })
        .state('Wizard', {
            url: "/Wizard",
            templateUrl: "page/forms/Wizard.html"
        })
		.state('Editors', {
            url: "/Editors",
            templateUrl: "page/forms/Editors.html"
        })
        .state('Validation', {
            url: "/Validation",
            templateUrl: "page/forms/Validation.html"
        })
        .state('Input Masks', {
            url: "/InputMasks",
            templateUrl: "page/forms/InputMasks.html"
        })
		.state('File Upload', {
            url: "/FileUpload",
            templateUrl: "page/forms/FileUpload.html"
        })
 

		.state('Basic Tables', {
            url: "/BasicTables",
            templateUrl: "page/table/BasicTables.html"
        })
		.state('Responsive Table', {
            url: "/ResponsiveTable",
            templateUrl: "page/table/ResponsiveTable.html"
        })
        .state('Data Tables', {
            url: "/DataTables",
            templateUrl: "page/table/DataTables.html"
        })
        .state('Editable Table', {
            url: "/EditableTable",
            templateUrl: "page/table/EditableTable.html"
        })
    


	.state('Flot Charts', {
            url: "/FlotCharts",
            templateUrl: "page/charts/FlotCharts.html"
        })
		.state('EasyPie', {
            url: "/EasyPie",
            templateUrl: "page/charts/EasyPie.html" 
        })
        .state('ChartJs', {
            url: "/ChartJs",
            templateUrl: "page/charts/ChartJs.html"
        })
        .state('Rickshaw', {
            url: "/Rickshaw",
            templateUrl: "page/charts/Rickshaw.html"
        })
		.state('Nvd3', {
            url: "/Nvd3",
            templateUrl: "page/charts/Nvd3.html"
        })
        .state('C3js', {
            url: "/C3js",
            templateUrl: "page/charts/C3js.html"
        })


		.state('Google Maps', {
            url: "/GoogleMaps",
            templateUrl: "page/map/GoogleMaps.html"
        })
        .state('Vector Maps', {
            url: "/VectorMaps",
            templateUrl: "page/map/VectorMaps.html"
        })



		.state('Calendar', {
            url: "/Calendar",
            templateUrl: "page/app/Calendar.html"
        })
        .state('Gallery', {
            url: "/Gallery",
            templateUrl: "page/app/Gallery.html"
        })
		.state('Messages', {
            url: "/Messages",
            templateUrl: "page/app/Messages.html"
        })
        .state('Social', {
            url: "/Social",
            templateUrl: "page/app/Social.html"
        })
        



        .state('Invoice', {
            url: "/Invoice",
            templateUrl: "page/extras/Invoice.html"
        })
        .state('Timeline', {
            url: "/Timeline",
            templateUrl: "page/extras/Timeline.html"
        })
		.state('Sortable Lists', {
            url: "/SortableLists",
            templateUrl: "page/extras/SortableLists.html"
        })
        .state('Nestable Lists', {
            url: "/NestableLists",
            templateUrl: "page/extras/NestableLists.html"
        })
        .state('Search', {
            url: "/Search",
            templateUrl: "page/extras/Search.html"
        })
        .state('Signin', {
            url: "/Signin",
            templateUrl: "page/extras/Signin.html"
        })
		.state('Signup', {
            url: "/Signup",
            templateUrl: "page/extras/Signup.html"
        })
        .state('Forgot Password', {
            url: "/ForgotPassword",
            templateUrl: "page/extras/ForgotPassword.html"
        })
        .state('Lockscreen', {
            url: "/Lockscreen",
            templateUrl: "page/extras/Lockscreen.html"
        })
		.state('404 Page', {
            url: "/404Page",
            templateUrl: "page/extras/404Page.html"
        })
        .state('Starter Page', {
            url: "/StarterPage",
            templateUrl: "page/extras/StarterPage.html"
        })




                 .state('Level 1_1Level 2_2', {
                        url: "/Level2_2",
                        templateUrl: "page/extras/StarterPage.html"
                    })

                    .state('Level 1_1Level 2_1Level 3.1', {
                        url: "/Level3_1",
                        templateUrl: "page/extras/StarterPage.html"
                    })
       

            .state('Level 1_2', {
                url: "/Level1_2",
                templateUrl: "page/extras/StarterPage.html"
            })










        .state('Action', {
            url: "/Action",
            templateUrl: "page/extras/Action.html"
        })
		.state('Alert', {
            url: "/Alert",
            templateUrl: "page/extras/Alert.html"
        })
        .state('Billing', {
            url: "/Billing",
            templateUrl: "page/extras/Billing.html"
        })
        .state('Progress', {
            url: "/Progress",
            templateUrl: "page/extras/Progress.html"
        })
		.state('Survey', {
            url: "/Survey",
            templateUrl: "page/extras/Survey.html"
        })
        .state('Welcome', {
            url: "/Welcome",
            templateUrl: "page/extras/Welcome.html"
        })




});








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
        $scope.subChild = [];
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
         $scope.active1 = [];
         $scope.active2 = [];
         $scope.active = [];
         $scope.subchild2=[];
         $scope.subchild3=[];

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
		}	
	};
	$scope.subchild2=[];
    $scope.active1 = [];
	$scope.subtoggle=function(index,z)
	{	
        console.log(z.IconSub.length);
        for(var i = 0; i < z.IconSub.length; i++)
        {
                if (i != index) 
			{
                $scope.active1[i]=false;	
            }
        }
        $scope.active1[index]=true;
		$scope.subchild2[index] = !$scope.subchild2[index];
		
	}
	$scope.subchild3=[];
    $scope.active2 = [];
	$scope.subtoggle2=function(index,z)
	{	
         console.log(z.IconSub2.length);
         for(var i = 0; i < z.IconSub2.length; i++)
         {
                if (i != index) 
			{
                $scope.active2[i]=false;	
            }
        }
         $scope.active2[index]=true;
		$scope.subchild3[index]=!$scope.subchild3[index];
	}
}
]);
