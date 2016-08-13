(function() {
  'use-strict';
  angular
    .module('components')
    .directive('textInput', Directive);
    
    function Directive(){
      function Controller() {
        var vm = this;
      }

      return {
        restrict: 'E',
        templateUrl: 'text-input-directive.html',
        controller: [Controller],
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          label: '@',
          model: '='
        }
      };
    }
})();