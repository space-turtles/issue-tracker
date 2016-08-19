(function() {
  'use strict';
  angular
    .module('issue-tracker.issues', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.issue-create', {
          url: '/create',
          templateUrl: 'create-issue-form.html',
          controller: 'CreateIssueController',
          controllerAs: 'vm'
      });
    }
})();
      