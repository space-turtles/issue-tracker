(function() {
  'use strict';
  angular
    .module('issue-tracker.sample')
    .controller('SampleController', ['$state', 'SampleService', Controller]);
  function Controller($state, SampleService) {
    var vm = this;
    vm.param1 = $state.params.param1;
    vm.showGreeting = function(isShowing) {
      vm.isShowingGreeting = isShowing;
    };

    vm.loadGreeting = function() {
      SampleService.makeCall().then(function(data) {
        vm.name = data.name;
      });
    };
  }
}());
