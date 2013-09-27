angular.module('projectMomoTestPage')
.factory('Authenticate', function($resource){
    return $resource("/service/authenticate/");
})

.factory('User', function($resource){
    return $resource("/service/user/");
})

.factory('MomoAPICall', function($http) {
    return {
        getDataOne : function() {
          return $http.get(
            'http://ezadkielmarbella.apiary.io/getMomoTestData').then(
            function(result) {
              return result.data.spendItems[0];
          })
        },
        getDataTwo : function(callback) {
            $http.get('http://ezadkielmarbella.apiary.io/getMomoTestData')
            .success(callback);
        },
        testHttpGetResult : function() {
            return $http
            .get('http://ezadkielmarbella.apiary.io/getMomoTestData');
        }
    }
})


.factory('LoginPage', function(){
  var title = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },
    content: function() { return content; },
    setContent: function(newContent) { content = newContent; }, 
};
});
