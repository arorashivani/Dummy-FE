'use strict';

app.controller('viewUserCtrl', [
    '$scope',
    'CONSTANTS',
    'cacheService',
    'User',
    'apiService',
    function(
        $scope,
        CONSTANTS,
        cacheService,
        User,
        apiService
    ){

    $scope.userList = [];
    $scope.defaultSize = 10;
    $scope.fromCount = 0;
    $scope.toCount = 0;
    $scope.userData = [];

    var fName = cacheService.getData('fName');
    $scope.fName = fName.replace('\"','').replace('\"','');

    $scope.loadUsersData = function(){
        var url = CONSTANTS.API_PATH.USER.LIST_USERS;
        apiService.callGetAPI(url, 'GET').then(function(res){
            var data = res[1].data;
            $scope.userList = data;
            $scope.getUserPageList();

        });

    };

    // Method for loading user data using lazy loading.
    $scope.getUserPageList = function(){
        if($scope.userList.length > 0){
           $scope.toCount = $scope.fromCount + $scope.defaultSize;
           var pushDataInList = User.pushDataInList($scope.userList, $scope.fromCount, $scope.toCount)
           if(pushDataInList.length > 0){
                Array.prototype.push.apply($scope.userData,pushDataInList);
           }
             $scope.fromCount = $scope.toCount;

        }

    }


    function init(){
        $scope.loadUsersData();
    };
       init();
}]);