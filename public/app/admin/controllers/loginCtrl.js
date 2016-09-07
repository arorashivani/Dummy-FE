'use strict';

app.controller('loginCtrl', [
    '$scope',
    '$routeParams',
    'apiService',
    'CONSTANTS',
    'cacheService',
    '$http',
    '$filter',
    '$location',
    function(
        $scope,
        $routeParams,
        apiService,
        CONSTANTS,
        cacheService,
        $http,
        $filter,
        $location
    ){

    $scope.isLoginError=false;
    $scope.showLoginBtn=true;
    $scope.showLoading=false;

    $scope.login = function(form){
       if(form.$valid){
           var username = $scope.user.username;
           var password = $scope.user.password;
           var url = CONSTANTS.API_PATH.LOGIN.USER_LOGIN;

           apiService.callLoginAPI(url, 'POST', {}, {username: username, password: password}).then(function(res){

               if(res && res.meta.status_code == '200' && res.data.authToken){

                   $scope.showLoginBtn=false;
                   $scope.showLoading=true;
                   cacheService.removeData('authToken');
                   var authToken = res.data.authToken;
                   var fName = 'ADMIN';
                   cacheService.setData('authToken', authToken);
                   cacheService.setData('fName', fName);
                   $location.path('/welcome');
               }
               else if(res && res.meta.status_code == 401){

                   $scope.isLoginError=true;
                   $scope.loginErrorMsg= "Invalid UserName or Password";
               }
           });

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