'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portionSchema = new Schema({
  text: { type: String, required: true },
  cost: { type: Number, required: true },
  paid: { type: Boolean, required: true, default: false },
  owner: { type: String, required: true },
  order: { type: 'Order', type: Schema.ObjectId }
});

module.exports = mongoose.model('Portion', portionSchema);
