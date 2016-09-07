'use strict';

app.controller('createUserCtrl', [
   '$scope',
   '$rootScope',
   '$timeout',
   'cacheService',
   'CONSTANTS',
   '$location',
   'apiService',
   function(
       $scope,
       $rootScope,
       $timeout,
       cacheService,
       CONSTANTS,
       $location,
       apiService
   ){

   $scope.initData = function(){
        $scope.userAccount = {};
        $scope.isError = false;
        $scope.isSuccess = false;
   };

   var fName = cacheService.getData('fName');
   $scope.fName = fName.replace('\"','').replace('\"','');

   function newUserForm(){
       $scope.newUser = angular.copy($scope.userAccount);
   };

   $scope.createUser = function(form){
      if(form.$valid) {
         newUserForm();
         var url = CONSTANTS.API_PATH.USER.ADD_USER;
         apiService.callPostAPI(url, 'POST', {}, $scope.newUser).then(function(res){
             if(res[0] && res[0].meta.status_code == 200){
                 $rootScope.isSuccess = true;
                 $rootScope.showMessage = "User Created Successfully";
                 $location.path('/admin/users');
             }
             else{
                  $rootScope.isError = true;
                  $rootScope.showMessage = "Unable To Create User";
             }
         });

      }

   }

   function init(){
       $scope.initData();
   }
   init();

}]);