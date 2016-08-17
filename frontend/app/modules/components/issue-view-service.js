(function() {
    angular
        .module('components')
        .service('ViewService', ['$http', Service]);
        
    function Service($http) {
        var service = this;
        
        service.makeCall = function() {
          return $http.get('/api/projects').then(function(response) {
              console.log('response is:', response);
              return response.data;
          });
        };
    }
})();