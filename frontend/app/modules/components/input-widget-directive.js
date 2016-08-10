(function() {
  'use-strict';
  angular
    .module('input-widget')
    .directive('input-widget-directive', function(){
      return {
        restrict: 'E',
        templateUrl: 'assets/input-widget-directive.html'
      };
    })
});