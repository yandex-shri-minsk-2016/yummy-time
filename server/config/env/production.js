'use strict';

module.exports = {
  db: `mongodb://${process.env.YUMMY_USER}:${process.env.YUMMY_PASSWORD}@ds011382.mlab.com:11382/yummydb`,
  port: process.env.PORT || 3000,
  secret: 'secret'
};
