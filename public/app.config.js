var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'lazy-scroll',
    'myApp.config'
]);

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
    .when('/users/changePassword', {
           templateUrl : '/app/admin/views/changePassword.html',
           controller  : 'viewUserCtrl'
    })
    .when('/admin/users/:method?/:data?', {
           templateUrl : function($routeParams){
             var path = '/app/admin/views/';
             var method= $routeParams.method;
             return (method == undefined) ? path + 'viewUser.html' : path + method + '.html';
           },
           controller  : 'viewUserCtrl'
    })
    .when('/admin/createUser/:method?/:data?', {
           templateUrl : function($routeParams){
             var path = '/app/admin/views/';
             var method= $routeParams.method;
             return (method == undefined) ? path + 'createUser.html' : path + method + '.html';
           },
           controller  : 'createUserCtrl'
    })
    .when('/welcome', {
           templateUrl : '/app/admin/views/dashboard.html',
           controller  : 'dashboardCtrl'
    })
    .otherwise({
           redirectTo : '/login'
    });

}]);