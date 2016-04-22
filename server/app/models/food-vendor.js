'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodVendorSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  minOrderCost: { type: Number }
});

module.exports = mongoose.model('FoodVendor', foodVendorSchema);
