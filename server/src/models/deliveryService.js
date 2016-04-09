"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deliveryServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  minOrderAmount: {
    type: String,
    required: false
  },
  workingTime: {
    type: [Number],
    required: true
  }
});
