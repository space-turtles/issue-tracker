(function() {
  'use-strict';
  angular
    .module('input-widget')
    .directive('inputWidgetDirective', function(){
      return {
        restrict: 'E',
        templateUrl: 'asserts/input-widget-directive.html'
      };
    })
});