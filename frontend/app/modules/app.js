(function () {
  angular
    .module('issue-tracker',
    [
        'ui.router',
        'issue-tracker.sample'
    ])
    .constant('baseImagePath', '/images/')
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
