'use strict';
const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');
const initializedApp = firebase.initializeApp(firebaseConfig.apiKey);
const db = firebase.database();
const slug = require('slug');


exports.initialize = function() {
  console.log(`Now connected to Firebase database: ${firebaseConfig.apiKey.databaseURL}`);
  return initializedApp;
}

exports.createProject = function(name, issues, res) {
  let projectSlug = slug(name);

  db.ref(`projects/${projectSlug}`).set({
    name: name,
    issues: issues
  })
  .then(() => {
    let successMessage = `Project ${name} created at /api/projects/${projectSlug}.`;
    console.log(successMessage);
      res.json({
        message: successMessage
      })
  });
}

exports.readProject = function(projectSlug, res) {
  let project = {};
  db.ref('projects/' + projectSlug).once('value')
    .then(snap => {
      project = snap.val();
      res.json(project);
    });
}

exports.updateProject = function(projectSlug, updates, res) {
  return false;
}

exports.deleteProject = function(projectSlug, res) {
  db.ref('projects').child(projectSlug).remove()
  .then(() => {
    res.json(`Project ${projectSlug} removed.`);
  });
}

exports.getProjects = function(res) {
  let projects = {};
  db.ref('projects').once('value')
    .then(snap => {
      snap.forEach(childSnap => {
        projects[childSnap.key] = childSnap.val();
      });
      res.json(projects);
    });
}
