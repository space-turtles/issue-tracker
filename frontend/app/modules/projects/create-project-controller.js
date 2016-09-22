(function(projects) {
  'use strict';
  angular
    .module('issue-tracker.projects')
    .controller('CreateProjectController', ['$state', 'ProjectsService', Controller]);

  function Controller($state, ProjectsService) {
      var vm = this; 
      vm.addProject = function(name, description){
        var newProject = {
          'name': name,
          'description':description,
          'numIssue' : 0
        }
        ProjectsService.add(newProject);
        ProjectsService.createProjectCall(); 
      };
  }
}());

