'use strict';

const welcomeMessage = require('./welcome-message');
welcomeMessage.log();

// Initial set up, loading dependencies
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const app = express();
const db = require('./db');

db.initialize();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());

const port = process.env.PORT || 8080;
const router = express.Router();

// Logging
router.use((req, res, next) => {
  console.log(`${Date.now()}: ${req.method} ${req.originalUrl}`);
  next();
});

router.get('/', (req, res) => {
  res.json({
    message: 'It\'s alive!!'
  });
});
app.use('/api', router);

router.route('/projects')
//POST /api/projects - validates and creates a new project
	.post((req, res) => {
    req.checkBody("name", "Invalid value for name. Please enter a valid ASCII string.").notEmpty().isAscii();
    let errors = req.validationErrors();
    if (errors) {
      res.send(errors);
      return;
    } 
    else { 
      const name = req.body.name;
      const issues = req.body.issues || [];

			db.createProject(req.body.name, req.body.issues, res);
		}
  })
//GET /api/projects - returns a JSON object with all the current projects in the db
  .get((req, res) => {
    db.getProjects(res);
  });

router.route('/projects/:project')
//GET /api/projects/:project - returns a json object with info on this project
  .get((req, res) => {
    db.readProject(req.params.project, res);
  })
//PUT /api/projects/:project - updates the project's fields, slug is static for now
  .put((req, res) => {
    const updates = {
      issues: req.body.issues,
      name: req.body.name
    }
    db.updateProject(req.params.project, updates, res);
  })
//DELETE /api/projects/:project - deletes this project
  .delete((req, res) => {
    db.deleteProject(req.params.project, res);
  });


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

app.listen(port);
console.log('Now listening on port', port);

