const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');
const initializedApp = firebase.initializeApp(firebaseConfig.apiKey);
const db = firebase.database();
const slug = require('slug');


exports.initialize = function() {
  console.log(`Now connected to Firebase database: ${firebaseConfig.apiKey.databaseURL}`);
  return initializedApp;
}

exports.createProject = function(name, issues) {
  let projectSlug = slug(name);
  
  db.ref('projects/' + projectSlug).set({
    name: name,
    issues: issues
  })
  .then(() => {
    console.log(`Project ${name} created at /api/projects/${projectSlug}.`);
  });
}



