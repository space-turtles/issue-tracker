(function() {
  'use-strict';
  angular
    .module('issue-input')
    .directive('issueInput', function(){
      return {
        restrict: 'E',
        templateUrl: 'issue-input-directive.html',
        scope: {
          label: '='
        }
      };
    })
})();