'use restrict';

app.controller('userCtrl', ['$scope', '$http', function($scope, $http){
    $scope.userList = [];

    $http.get('/data/user.json').then(function(res){
        var data = res.data;
        $scope.userList = data;
        console.log($scope.userList);
    })

}]);