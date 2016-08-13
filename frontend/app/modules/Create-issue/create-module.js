(function() {
  'use strict';
  angular
    .module('issue-tracker.Create-issue', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.create-issue', {
          url: '/create',
          templateUrl: 'CreateForm.html',
          controller: 'createController',
          controllerAs: 'createCtrl'
      })
    }
})();
