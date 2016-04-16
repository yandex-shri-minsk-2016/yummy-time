'use strict';

const jwt = require('jsonwebtoken');
const Account = require('../models/account');

exports.token = function(req, res) {
  const options = {
    select: 'name email hashed_password',
    criteria: { 'email': req.body.email }
  };

  Account.load(options, function(err, account) {
    if (err) {
      throw err;
    }

    if (account) {
      if (account.authenticate(req.body.password)) {
        let token = jwt.sign(account.id, 'secret');
        res.json({ message: 'Enjoy your token', token: token });

      } else {
        res.json({ message: 'Invalid password' });
      }
    } else {
      res.json({ message: 'No such account' });
    }
  })
};
