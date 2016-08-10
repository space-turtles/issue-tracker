(function() {
  'use-strict';
  angular
    .module('input-widget')
    .directive('input-widget', function(){
      return {
        restrict: 'E',
        templateUrl: 'assets/input-widget-directive.html'
      };
    })
});