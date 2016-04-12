'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var order = new Schema({
  orderTime: {
    type: String,
    required: true
  },
  deliveryTime: {
    type: String,
    required: false
  },
  manager: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: true
  }
});
