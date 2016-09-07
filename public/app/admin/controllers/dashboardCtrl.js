'use strict';

app.controller('dashboardCtrl', ['$scope', 'cacheService', function($scope, cacheService){

    var fName = cacheService.getData('fName');
    $scope.fName = fName.replace('\"','').replace('\"','');

}]);