(function() {
    'use strict';
    
    angular
        .module('components')
        .directive('issuesView', Directive);
        
    function Directive() {
        function Controller() {
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