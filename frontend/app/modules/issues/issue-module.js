(function() {
  'use strict';
  angular
    .module('issue-tracker.projects', [])
    .config(['$stateProvider', Routes]);

  function Routes($stateProvider) {
    $stateProvider.state('projects', {
      abstract: true,
      url: '/projects',
      template: 'pickle <ui-view/>' 
    })
    .state('projects.a', {
      url: '/a',
      template: '<li ng-repeat="issue in issues">{{issue.name}}</li>',
      controller: function($scope){
        $scope.issues = [{ name: 'issue one' }, { name: 'issue two' }];
      }
    });
  }
})();

