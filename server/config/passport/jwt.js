'use strict';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Account = require('../../app/models/account');
const config = require('../config');

module.exports = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.secret
  },
  function(payload, done) {
    const options = {
      criteria: { 'id': payload.sub }
    };

    Account.load(options, function(err, account) {
      if (err) {
        return done(err);
      }

      if (account) {
        done(null, account);
      } else {
        done(null, false);
      }
    })
  }
);
