(function() {
  'use-strict';
  angular
    .module('input-widget')
    .directive('inputWidgetDirective', function(){
      return {
        restrict: 'E',
        templateUrl: 'assets/input-widget-directive.html'
      };
    })
});