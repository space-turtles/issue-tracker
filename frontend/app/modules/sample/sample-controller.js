(function() {
  'use strict';
  angular
    .module('issue-tracker.sample')
    .controller('SampleController', ['$state', Controller]);
  function Controller($state) {
    var vm = this;
    vm.param1 = $state.params.param1;
    vm.showGreeting = function(isShowing) {
      vm.isShowingGreeting = isShowing;
    };
  }
}());
