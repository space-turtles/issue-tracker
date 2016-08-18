(function() {
  'use strict';
  angular
    .module('components')
    .controller('viewController', ['ViewService', Controller]);
    
  function Controller(ViewService) {
    var vm = this;

    vm.loadProjectCall = function() {
      ViewService.makeCall().then(function(data) {
        vm.issues = [];
        for (var project in  data) {
          for (var projectData in project){
            vm.issues.push(projectData.issues);
            console.log('current projectData:', projectData);
          }
        }
        console.log('vm.issues', vm.issues);
        console.log('the data', data);
      });
    }
    vm.loadProjectCall();
  };
})();