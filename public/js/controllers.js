angular.module('projectMomoTestPage')

.controller('LoginController',function($scope,$sanitize, $location, Authenticate ){
    $scope.login = function(){
      Authenticate.save({
        'email': $sanitize($scope.credentials.email),
        'password': $sanitize($scope.credentials.password)
      },function(response) { // success

        if( response.error == 0 ){
          $scope.flash = ''
          $location.path('/home');
        } else {
          $scope.flash = response.error.message;
        }

      },function(response){ // error
        $scope.flash = response.data.flash
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
/*
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
*/
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
})

.controller('HomeController', function($scope, $location, Authenticate) {
    window.scope = $scope;
    $scope.title = "Dashboard";
    
    $scope.oneAtATime = true;

    $scope.groups = [
    {
        title: "Heading 1",
        content: "Heading 1 - body"
    },
    {
        title: "Heading 2",
        content: "Heading 2 - body"
    }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.logout = function() {
     Authenticate.get({},function(){
        $location.path('/');
      });
 };

}
);
