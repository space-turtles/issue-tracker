(function(issues) {
  'use strict';
  angular
    .module('issue-tracker.Create')
    .controller('CreateIssueController', ['$state', 'issuesService', Controller]);

  function Controller($state, IssuesService) {
      var vm = this; 
      vm.addIssue = function(name, description){
        var newIssue = {
          'name': name,
          'description':description
        }
        IssuesService.add(newIssue);
        IssuesService.createIssueCall(); 
      };
  }
}());

