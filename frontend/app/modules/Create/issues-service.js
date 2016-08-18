(function() {
	
	angular
    .module('issue-tracker.Create')
    .service('issues-service', ['$http', Service]);

  function Service($http) {
		var service = this;
		service.issuesList = []; 
	  service.add = function (issue){
		service.issuesList.push({id: service.issuesList.length, name: issue.name, description: issue.description});
		};
    
    service.makeCall = function() {
      return $http.post('/api/projects', service.issuesList).then(function(response) {
        return response.data;
      });
    };
	
	}

}());
