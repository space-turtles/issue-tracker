//[JG]: Provides an interface for commonly used persistence operations.
'use strict';
const firebase = require('firebase');
let firebaseConfig = {};

if (process.env['FIREBASE_API_KEY']) {
  firebaseConfig.apiKey = process.env['FIREBASE_API_KEY'];
  firebaseConfig.databaseURL = process.env['FIREBASE_DATABASE_URL'];
}
else {
  firebaseConfig = require('./firebase-config').apiKey;
}

const initializedApp = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const slug = require('slug');


exports.initialize = function() {
  console.log(`Now connected to Firebase database: ${firebaseConfig.databaseURL}`);
  return initializedApp;
}

exports.create = function(ref, obj) {
  return db.ref(ref + '/' + slug(obj.name)).set(obj);
};

exports.delete = function(ref, id) {
  return db.ref(ref).child(id).remove();
};

exports.get = function(ref, id) {
  return db.ref(ref + '/' + id).once('value')
    .then(snap => {
      return snap.val();
    });
};

exports.query = function(ref) {
  return db.ref(ref).once('value')
    .then(snap => {
      let objects = {};
      snap.forEach(childSnap => {
        objects[childSnap.key] = childSnap.val();
      });
      return objects;
    })
    .catch(error => {
      return {status: 'error'};
    });
};

exports.update = function(ref, id, obj) {
  return db.ref(ref).child(id).update(obj);
};
