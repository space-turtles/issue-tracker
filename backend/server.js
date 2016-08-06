'use strict';

// Initial set up, loading dependencies
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const app = express();

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

// Routes, this is just to show it works, we should end up with
// routes in their own directory when we start actually writing them
router.get('/', (req, res) => {
  res.json({
    message: 'It\'s alive!!'
  });
});

app.use('/api', router);

app.listen(port);
console.log('Now listening on port', port);

