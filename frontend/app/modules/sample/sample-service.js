(function() {
  angular
    .module('issue-tracker.sample')
    .service('SampleService', ['$http', Service]);

  function Service($http) {
    var service = this;
    service.makeCall = function() {
      return $http.get('data.json').then(function(response) {
        return response.data;
      });
    };
    return service;
  }
})();
