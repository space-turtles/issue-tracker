(function() {
  'use-strict';
  angular
    .module('input-widget')
    .directive('input-widget', function(){
      return {
        restrict: 'E',
        templateUrl: 'modules/components/input-widget-directive.html'
      };
    })
})();