'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  time: { type: String, required: true },
  location: { type: String, required: true },
  manager: { type: String, required: true },
  vendor: { ref: 'Vendor', type: Schema.ObjectId },
  portions: [{ ref: 'Portion', type: Schema.ObjectId }]
});

module.exports = mongoose.model('Order', orderSchema);
