(function() {
  'use strict';
  angular
    .module('components')
    .controller('viewController', ['ViewService', Controller]);
    
  function Controller() {
    var vm = this;
  
    vm.loadProjectCall = function() {
      ViewService.makeCall().then(function(data) {
        return data;
      });
    }
  };
})();