(function() {
  'use strict';
  angular
    .module('issue-tracker.projects', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.project-create', {
          url: '/create-project',
          templateUrl: 'create-project-form.html',
          controller: 'CreateProjectController',
          controllerAs: 'vm'
      });
    }
})();
      