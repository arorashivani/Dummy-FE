'use restrict';

app.controller('loginCtrl', ['$scope', '$routeParams', '$http', '$filter', '$location', function($scope, $routeParams, $http, $filter, $location){

    $scope.isLoginError=false;

    $scope.login = function(form){
       if(form.$valid){
          $http.get("/data/user.json").then(function(res){
               var data = res.data;
               var user = $filter('filter')(data, {"userName" : $scope.user.username, "password" : $scope.user.password})[0];
               if(user){
                    $location.path('/welcome');
               } else {
                     $scope.isLoginError=true;
                     $scope.loginErrorMsg= "Invalid UserName or Password";
               }
          })
       }
    }
    function newLogin(){
        $scope.user = {};
    };
    function init(){
       if(Object.keys($routeParams).length === 0){
             newLogin();
       }
    };
       init();
}]);