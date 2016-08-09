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

			db.createProject(req.body.name, req.body.issues);

      res.json({
        message: `Project ${req.body.name} created.`
      })
		}
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

