(function() {
  'use strict';
  angular
    .module('issue-tracker.Create', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.Create', {
          url: '/create',
          templateUrl: 'CreateForm.html',
          controller: 'PostCtlr',
          controllerAs: 'post'
      }).state('issue-tracker.List', {
          url: '/List',
          templateUrl: 'IssuesList.html',
          controller: 'ListCtlr',
          controllerAs: 'list'
      });
    }
})();
      