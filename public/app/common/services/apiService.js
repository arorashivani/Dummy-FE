'use strict';

app.service('apiService', ['$http', '$q', 'cacheService', function($http, $q, cacheService){

    this.callLoginAPI = function(url, method, params, data){
        var deferred = $q.defer();
        var headers ={
            'Content-Type': 'application/json; charset=utf-8'
        }
        $http({url:url, method:method, headers:headers, params:params, data:data})
              .success(function(response){
                  deferred.resolve(response);
              }).error(function(err){
                  deferred.resolve(err);
        });
              return deferred.promise;
    };

    this.callGetAPI = function(url, method, params, data){
        var deferred = $q.defer();
        var authToken = cacheService.getData('authToken');
        var headers ={
            'Content-Type': 'application/json; charset=utf-8',
        }
        if(authToken){
            headers['x-access-token'] = JSON.parse(authToken);
        }
        $http({url:url, method:method, headers:headers, params:params, data:data})
            .success(function(res){
               if(res &&  res.meta && res.meta.status_code == 401){
                   deferred.reject(res);
               }else{
                   deferred.resolve(res);
               }
            }).error(function(err){
                   deferred.resolve(err);
        });
             return deferred.promise;
    };

    this.callPostAPI = function(url, method, params, data){
        var deferred = $q.defer();
        var authToken = cacheService.getData('authToken');
        var headers = {
            'Content-Type': 'application/json; charset=utf-8',
        }
        if(authToken){
            headers['x-access-token'] = JSON.parse(authToken);
        }
        $http({url:url, method:method, headers:headers, params:params, data:data})
            .success(function(res){
                if(res && res.meta && res.meta.status_code == 401){
                    deferred.reject(res);
                }else{
                    deferred.resolve(res);
                }
            }).error(function(err){
                    deferred.resolve(err);
        });
              return deferred.promise;
    };

}]);