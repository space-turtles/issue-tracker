'use strict';
require('./welcome-message').log();

// Initial set up, loading dependencies
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const app = express();
const dao = require('./firebase-dao.js');
const port = process.env.PORT || 8080;
const router = express.Router();



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());
app.use('/api', router);



//[JG]: Used to support deliving AngularJS web app from within express server.
app.use('/', express.static('public'));
app.get('/*', (req, res, next) => {
  //[JG]: Anguar routes are configured to not be hash prefixed.
  if (req.url.indexOf('/api') === 0) {
    next();
  }
  else {
    res.sendFile(__dirname + '/public/index.html');
  }
});



// Logging
router.use((req, res, next) => {
  console.log(`${Date.now()}: ${req.method} ${req.originalUrl}`);
  next();
});



//Hello World
router.get('/', (req, res) => {
  res.json({message: 'It\'s alive!!'});
});



function generateResourceRoutes(router, ref) {
  router.route('/' + ref)
    .get((req, res) => {
      dao.query(ref).then(function(objects) {
        res.json(objects);
      });
    })
  	.post((req, res) => {
      dao.create(ref, req.body).then(function(createdObject) {
        res.json(createdObject);
      });
    });

  router.route('/' + ref + '/:id')
    .get((req, res) => {
      dao.get(ref, req.params.id).then(function(object) {
        res.json(object);
      });
    })
    .put((req, res) => {
      dao.update(ref, req.params.id, req.body).then(function(updatedObject) {
        res.json(updatedObject);
      });
    })
    .delete((req, res) => {
      dao.delete(ref, req.params.id).then(function(deletedObject) {
        res.json(deletedObject);
      });
    });

}

//Routes
generateResourceRoutes(router, 'issues');
generateResourceRoutes(router, 'projects');



app.listen(port);
console.log('Now listening on port', port);
