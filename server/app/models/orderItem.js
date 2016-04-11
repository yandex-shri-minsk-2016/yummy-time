"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderItem = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  }
});
