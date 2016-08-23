var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
        enabled    : true,
        requireBase: false
    });

    $routeProvider
    .when('/login', {
       templateUrl : '/app/admin/views/login.html',
       controller  : 'loginCtrl'
    })
    .when('/admin/users/:method?/:data?', {
           templateUrl : function($routeParams){
             var path = '/app/admin/views/';
             var method= $routeParams.method;
             return (method == undefined) ? path + 'viewUser.html' : path + method + 'userInfo.html';
           },
           controller  : 'userCtrl'
    })
    .when('/welcome', {
           templateUrl : '/app/admin/views/dashboard.html',
           controller  : 'dashboardCtrl'
     })
    .otherwise({
           redirectTo : '/login'
    });

}]);