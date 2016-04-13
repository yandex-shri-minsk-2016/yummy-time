'use strict';

const API = require('json-api');
const models = {
  'Order': require('../models/order')
};

const adapter = new API.dbAdapters.Mongoose(models);
const registry = new API.ResourceTypeRegistry({
  orders: require('./api/resource-descriptions/order')
}, { dbAdapter: adapter });

var controller = new API.controllers.API(registry);
var api = new API.httpStrategies.Express(controller);

module.exports = api.apiRequest.bind(api);
