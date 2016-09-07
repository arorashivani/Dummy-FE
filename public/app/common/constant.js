'use strict';

app.factory('CONSTANTS', ['EnvironmentConfig', function(EnvironmentConfig){

 var BASE_PATH = EnvironmentConfig.baseUrl;
 return{
    API_PATH: {
       LOGIN: {
          USER_LOGIN: BASE_PATH + '/api/login'
       },
       USER: {
           LIST_USERS: BASE_PATH + '/api/users',
           ADD_USER: BASE_PATH + '/api/users'
       }
    }
 }

}]);