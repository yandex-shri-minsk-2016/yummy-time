'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const http = require('http');
const notification = require('./app/controllers/notifications');

const config = require('./config/config');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);


function connect(options) {
  return mongoose.connect(config.db, options).connection;
}

function listen() {
  server.listen(config.port);

  // eslint-disable-next-line no-console
  console.log(`Express app started on http://127.0.0.1:${config.port}`);
}

connect()
  // eslint-disable-next-line no-console
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

/**
 * Expose application
 */

 module.exports = app;

// Configure application
app.use(cookieParser());
app.use(cookieSession({ secret: config.secret }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./config/cors')(app);
require('./config/logger')(app);
require('./config/passport')(app, passport);

// headers to connect to client
app.all('*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", config.clientPort);
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 res.header('Access-Control-Allow-Credentials', 'true');
 next();
});

notification.connection(io);


// Bootstrap routes
require('./config/routes')(app);
