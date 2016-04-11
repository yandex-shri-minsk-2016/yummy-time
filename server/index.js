'use strict';

const express  = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');
const app = express();

function connect(options) {
  return mongoose.connect(config.db, options).connection;
}

function listen() {
  app.listen(config.port);
  console.log('Express app started on http://127.0.0.1:' + config.port);
}

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);


/**
 * Expose application
 */

module.exports = app;

// Bootstrap routes
require('./config/routes')(app);
