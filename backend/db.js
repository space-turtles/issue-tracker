const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');

exports.initialize = function() {
  console.log(`Now connected to Firebase database: ${firebaseConfig.apiKey.databaseURL}`);
  return firebase.initializeApp(firebaseConfig.apiKey);
}

