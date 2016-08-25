(function(){
   'use strict';
   
   angular
      .module('issue-tracker.issues', [])
      .config(['$stateProvider', Routes]);
      
      function Routes($stateProvider) {
         $stateProvider.state('issue-tracker.issues', {
            url: '/issues',
            templateUrl: 'issue-view-directive.html',
            controller: 'IssueViewController',
            controllerAs: 'vm'
         });
      }
})();