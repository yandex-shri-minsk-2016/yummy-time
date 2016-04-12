'use strict';

const main = require('../app/controllers/main');

/**
 * Expose routes
 */

module.exports = function(app) {
  app.get('/', main.index);
}
