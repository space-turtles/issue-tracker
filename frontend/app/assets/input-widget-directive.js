(function() {
  'use-strict';
  angular
    .module('issue-tracker')
    .directive('inputWidgetDirective', function(){
      return {
        restrict: 'E',
        templateUrl: 'input-widget-directive.html'
      };
    })
});