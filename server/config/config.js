'use strict';

const development = require('./env/development');

/**
 * Expose
 */

module.exports = {
  development: development
}[process.env.NODE_ENV || 'development']
