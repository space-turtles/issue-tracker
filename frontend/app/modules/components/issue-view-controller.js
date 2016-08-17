(function() {
  'use strict';
  angular
    .module('components')
    .controller('viewController', ['ViewService', Controller]);
    
  function Controller(ViewService) {
    var vm = this;

    vm.loadProjectCall = function() {
      ViewService.makeCall().then(function(data) {
        vm.issues = data;
      });
    }
    vm.loadProjectCall();
    console.log(vm.issues);
  };
})();