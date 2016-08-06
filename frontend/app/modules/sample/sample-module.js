(function() {
  'use strict';
  angular
    .module('issue-tracker.sample', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider.state('issue-tracker.sample', {
          url: '/',
          templateUrl: 'sample.html',
          controller: 'SampleController',
          controllerAs: 'vm'
      });
    }
})();
