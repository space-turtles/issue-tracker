(function(issues) {
	'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('ListCtrl', ['$state', 'issuesService', Controller]);
	  function Controller($state, issuesService) {
			var list = this;
			list.issues = issues.list;
		}
}());

