(function(issues) {
	'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('PostCtrl', ['$state', 'issuesService', Controller]);
	 function Controller($state, issuesService) {
		 var post = this; 
		 post.addIssue = function(name, description){
	   issues.add(name, description);
	   post.newIssue = ''; 
     };
	 }
}());

