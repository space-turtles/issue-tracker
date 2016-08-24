(function() {
    'use strict';
    
    angular
        .module('components')
        .directive('issuesView', Directive);
        
    function Directive() {
        function Controller(ViewService) {
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
        vm.loadProjectCall = function() {
          ViewService.makeCall().then(function(data) {
            //Replace with for...in when data is workable
            console.log('data', data);
           });
          }
        // Testing data that is output  
        vm.loadProjectCall();
        } 
        
        return {
          restrict: 'E',
          templateUrl: 'issue-view-directive.html',
          controller: ['ViewService', Controller],
          controllerAs: 'vm',
          bindToController: true
        };
    }
})();