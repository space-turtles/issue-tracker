(function() {
  'use strict';
  angular
    .module('components')
    .controller('viewController', ['ViewService', Controller]);
    
  function Controller(ViewService) {
    var vm = this;
    
    /*vm.issues = [{
      'projectName': 'project',
      'issues': [{
        "hasdf":true,
        "hello":true,
        "sadfwef":true
      }]
    }];
    
    console.log('issues', vm.issues);
    vm.loadProjectCall = function() {
      ViewService.makeCall().then(function(data) {
        console.log('data', data);
      });
    }
    vm.loadProjectCall(); */
  };
})();