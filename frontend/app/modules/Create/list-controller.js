(function(issues) {
	'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('ListController', ['$state', 'IssuesService', Controller]);
	  function Controller($state, IssuesService) {
			var vm = this;
			vm.issues = issues.list;
		}
}());

