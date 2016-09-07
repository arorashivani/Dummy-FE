'user strict';

app.factory('User', ['apiService', function(apiService){

      function User(){
              var userData = [];
      };

      User.pushDataInList = function(userList, fromCount, toCount){

         var userData = [];
         if(toCount >= userList.length){
                toCount = userList.length;
         }
         for(fromCount; fromCount < toCount; fromCount++) {
                 userData.push(userList[fromCount]);
         }
           return userData;
      };
           return User;

}]);