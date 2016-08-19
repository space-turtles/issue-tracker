(function() {
  'use strict';
  angular
    .module('issue-tracker.Create', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.CreateForm', {
          url: '/create',
          templateUrl: 'create-issue-form.html',
          controller: 'CreateIssueController',
          controllerAs: 'vm'
      });
    }
})();
      