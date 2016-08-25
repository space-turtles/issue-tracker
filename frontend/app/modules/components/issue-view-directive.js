(function() {
    'use strict';
    
    angular
        .module('issue-tracker.issues')
        .directive('issuesView', Directive);
        
    function Directive() {
      function Controller(ViewService) {
        var vm = this;
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