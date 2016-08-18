(function(issues) {
	'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('ListController', ['$state', 'issuesService', Controller]);
	  function Controller($state, issuesService) {
			var vm = this;
			vm.issues = issues.list;
		}
}());

