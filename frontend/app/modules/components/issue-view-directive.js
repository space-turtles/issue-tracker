(function() {
    'use strict';
    
    angular
        .module('components')
        .directive('issuesView', Directive);
        
    function Directive() {
        function Controller() {
            var vm = this;
            vm.issues = [{
              'projectName': 'project',
              'issues': [
                {
                  "issueId": 0,
                  "issueName": "hasdf",
                  "isOpen": true
                },
                {
                  "issueId": 1,
                  "issueName": "hello",
                  "isOpen": true
                },
                {
                  "issueId": 2,
                  "issueName": "sadfwef",
                  "isOpen": true
                }
              ]
            }];
    
        console.log('issues', vm.issues);
        vm.loadProjectCall = function() {
          ViewService.makeCall().then(function(data) {
            console.log('data', data);
           });
          }
        }
        
        return {
          restrict: 'E',
          templateUrl: 'issue-view-directive.html',
          controller: [Controller],
          controllerAs: 'vm',
          bindToController: true
        };
    }
})();