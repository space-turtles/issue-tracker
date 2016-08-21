(function(issues) {
  'use strict';
  angular
    .module('issue-tracker.issues')
    .controller('CreateIssueController', ['$state', 'IssuesService', Controller]);

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

