(function() {
  'use-strict';
  angular
    .module('issue-input')
    .directive('issueInput', Directive);
    
    function Directive(){
      function Controller() {
        var vm = this;
      }

      return {
        restrict: 'E',
        templateUrl: 'issue-input-directive.html',
        controller: [Controller],
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          label: '=',
          model: '='
        }
      };
    }
})();