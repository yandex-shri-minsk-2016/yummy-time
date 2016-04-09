'use strict';
var express  = require('express');
var mongoose = require('mongoose');
var app = express();

// Start by loading up all our mongoose models and connecting.
mongoose.connect('mongodb://localhost/example');

app.get('/', function (req, res) {
  res.send('Hi world');
})

// And we're done! Start 'er up!
console.log('Starting up! Visit 127.0.0.1:3000 to see the docs.');
app.listen(3000);
