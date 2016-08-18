(function(issues) {
	'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('PostController', ['$state', 'issuesService', Controller]);
	 function Controller($state, issuesService) {
		 var vm = this; 
		 vm.addIssue = function(name, description){
	   issues.add(name, description);
	   vm.newIssue = ''; 
     };
	 }
}());

