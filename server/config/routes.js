'use strict';

const main = require('../app/controllers/main');
const api = require('../app/controllers/api');
const auth = require('../app/controllers/auth');

/**
 * Expose routes
 */

module.exports = function applyRoutes(app) {
  app.get('/', main.index);
  app.post('/auth/token', auth.token);
  app.get('/:type(orders|accounts|portions|vendors)', api);
  app.get('/:type(orders|accounts|portions|vendors)/:id', api);
  app.post('/:type(orders|accounts|portions|vendors)', api);
};
