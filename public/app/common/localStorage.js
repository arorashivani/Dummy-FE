'use restrict';

app.factory('storageService', ['$rootScope', function($rootScope){

      return{
            get : function(key){
               return localStorage.getItem(key);
            },

            save : function(key, data){
                localStorage.setItem(key, JSON.stringify(data));
            },

            remove : function(key){
                localStorage.removeItem(key);
            },

            clearAll : function(){
                localStorage.clear();
            }
      };
}])

app.factory('cacheService', ['storageService', function(storageService){

      return{
              getData : function(key){
                  return storageService.get(key);
              },

              setData : function(key, data){
                  storageService.save(key, data);
              },

              removeData : function(key){
                  storageService.remove(key);
              }
      };
}])