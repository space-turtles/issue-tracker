(function() {
  'use strict';
  angular
    .module('issue-tracker.Create', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.CreateForm', {
          url: '/create',
          templateUrl: 'CreateForm.html',
          controller: 'PostController',
          controllerAs: 'vm'
      }).state('issue-tracker.IssuesList', {
          url: '/List',
          templateUrl: 'IssuesList.html',
          controller: 'ListController',
          controllerAs: 'vm'
      });
    }
})();
      