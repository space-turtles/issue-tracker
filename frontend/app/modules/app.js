(function () {
  'use strict';
   //[JG]: Vars filled in by build tool.
  var apiHost = '{!api_host!}';

  angular
    .module('issue-tracker',
    [ 
        'ui.router',
<<<<<<< HEAD
        'issue-tracker.sample',
				'issue-tracker.issues',
        'issue-tracker.projects',
        'components'
=======
        'issue-tracker.projects'
>>>>>>> 7c5ccede051beccdee79a4e497d2138fbe3ba9c8
    ])
    .constant('baseImagePath', '/images/')
    .constant('config', {apiHost: apiHost})
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      $stateProvider.state('issue-tracker', {
          url: '',
          templateUrl: 'standard-layout.html',
      })
      .state('issue-tracker-home_if_no_slash', { //[JG] Fixes blank screen when refreshing on home page
          url: '/',
          templateUrl: 'standard-layout.html'
      });
    }])
    .controller('ApplicationController', ['$rootScope', '$state', '$anchorScroll', ApplicationController]);

    function ApplicationController($rootScope, $state, $anchorScroll) {
      var vm = this;
    }
})();
