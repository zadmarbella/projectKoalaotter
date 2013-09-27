angular.module('projectMomoTestPage')

	.controller('loginController',function($scope,$sanitize,$location,Authenticate,Flash){
		$scope.login = function(){
		    Authenticate.save({
			'email': $sanitize($scope.email),
			'password': $sanitize($scope.password)
		    },function() {
			$location.path('/home')
			Flash.clear()
			sessionStorage.authenticated = true;
		    },function(response){
			//Flash.show(response.flash)
		    })
		}
	})
	.controller('signupController',function($scope,$sanitize,$location,User){
		$scope.signup = function(){
			// $scope.flash = '';
			User.save({
				'name': $sanitize($scope.name),
				'email': $sanitize($scope.email),
				'password': $sanitize($scope.password)
			},function() {
				$scope.flash = '';
				$location.path('/home');
			},function(response){
				$scope.flash = response.data.flash;
			})
		}
	})

	.controller('homeController',function($scope,$location,Authenticate, Movies,Flash){
		if (!sessionStorage.authenticated){
		    $location.path('/')
		    Flash.show("you should be authenticated to access this page")
		}
		$scope.logout = function (){
		    Authenticate.get({},function(response){
			delete sessionStorage.authenticated
			Flash.show(response.flash)
			$location.path('/')
		    })
		}
	})

	.controller('MainCtrl', function($scope){
	})

	.controller('MomoDemoCtrl', function($scope, MomoAPICall){
 		$scope.alerts = [ {
		type : 'danger',
		msg : 'Oh snap! Momo Alert.'
		    }, {
			type : 'success',
			msg : 'Well done! Momo Alert.'
		    } ];

		    $scope.addMomoAlert = function() {
			MomoAPICall.getDataOne().then(function(data) {
			    // this will execute when the
			    // AJAX call completes.
			    $scope.alerts.push({
				type: 'success',
				msg : "Another Momo alert! " + data.name
			    });
			});

		    };

		    $scope.closeMomoAlert = function(index) {
			$scope.alerts.splice(index, 1);
		    };
	}).controller('LoginCtrl', function($scope, LoginPage) {
  		LoginPage.setTitle('test login');

	});























