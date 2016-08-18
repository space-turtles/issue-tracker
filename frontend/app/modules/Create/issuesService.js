(function() {
	
	angular
    .module('issue-tracker.Create')
    .service('IssuesService', ['$http', Service]);

  function Service($http) {
	var issues = {
		name: "", 
		description: ""
	};
		
	issues.list = []; 
	
	issues.add = function (issue){
		issues.list.push({id: issues.list.length, name: name, description: description});
	  };
	};
	return issues;

});
