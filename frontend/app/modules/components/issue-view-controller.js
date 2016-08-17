(function() {
  'use strict';
  angular
    .module('components')
    .controller('viewController', ['ViewService', Controller]);
    
  function Controller(ViewService) {
    var vm = this;
  
    vm.loadProjectCall = function() {
      ViewService.makeCall().then(function(data) {
        return data;
      });
    }
    var issues = vm.loadProjectCall();
    console.log(issues);
  };
})();