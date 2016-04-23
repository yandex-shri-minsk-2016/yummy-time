'use strict';

const passport = require('passport');

const jwt = require('./passport/jwt');
const Account = require('../app/models/account');

module.exports = function(app, passport) {
  passport.serializeUser((u, done) => done(null, u));
  passport.deserializeUser((id, done) => Account.findById(id, function(err, u) {
    done(err, u);
  }));

  passport.use(jwt);

  app.use(passport.initialize());
  app.use(passport.session());
}
