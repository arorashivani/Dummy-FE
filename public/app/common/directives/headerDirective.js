'use strict';

app.directive('header', ['cacheService', function(cacheService){
      return{
             restrict    : 'E',
             templateUrl : '/app/admin/views/header.html'
      };
}]);