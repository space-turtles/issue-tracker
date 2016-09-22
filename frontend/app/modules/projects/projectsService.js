(function() {
	
	angular
    .module('issue-tracker.projects')
    .service('ProjectsService', ['$http', Service]);

  function Service($http) {
		var service = this;
		service.projectList = []; 
	  service.add = function (project){
		service.projectList.push({id: service.projectList.length, name: project.name, description: project.description, numIssues: project.numIssues });
		};
    
    service.createProjectCall = function() {
      return $http.post('/api/projects', service.projectList).then(function(response) {
        console.log(projectList);
        return response.data;
      });
    };
	
	}

}());
