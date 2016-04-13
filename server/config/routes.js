'use strict';

const main = require('../app/controllers/main');
const api = require('../app/controllers/api');

/**
 * Expose routes
 */

module.exports = function(app) {
  app.get('/', main.index);
  app.post('/:type(orders)', api);
}
