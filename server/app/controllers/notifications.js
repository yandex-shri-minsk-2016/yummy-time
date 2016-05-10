'use strict';

const nodemailer = require('nodemailer');
const config = require('../../config/config');
const mongoose = require('mongoose');
const Order = require('../models/order');
const Account = require('../models/account');
const Portion = require('../models/portion');


function sendEmail(email, message) {

  var transporter = nodemailer.createTransport(config.smtp);

  var mailOptions = {
    from: 'yummytime.test@gmail.com',
    to: email,
    subject: 'Notification',
    text: message
  };

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        };
      });
    }
  });
}


exports.connection = function(io) {

  io.sockets.on("connection", function(socket) {

    socket.on('join', function(data) {
      socket.join(data.room);
    });

    socket.on('leave', function(data) {
      socket.leave(data.room);
    });

    socket.on('sendMessage', function(data) {
      socket.broadcast.to(data.order).emit('message', { msg: data.message });

      var emails = [];
      Order
        .findById(data.order)
        .populate({
          path: 'portions',
          model: 'Portion',
          populate: {
            path: 'owner',
            model: 'Account'
          }
        })
        .exec(function(err, a) {
          a.portions.forEach(function(item, i, arr) {

            var isInList = false;
            emails.forEach(function(email, i, arr) {
              if (email === item.owner.email) {
                isInList = true;
              }
            });
            if (!isInList) {
              emails.push(item.owner.email)
            }
          });

          emails.forEach(function(email, i, arr) {
            sendEmail(email, data.message);
          });
        });

    });


    socket.on('getOrders', function(data) {
      var orders = [];
      Order
        .find()
        .populate({
          path: 'portions',
          model: 'Portion',
          populate: {
            path: 'owner',
            model: 'Account'
          }
        })
        .exec(function(err, a) {

          a.forEach(function(item, i, arr) {
            var portions = item.portions;
            for (i = 0; i < portions.length; i++) {
              if (portions[i].owner.email === data.email) {
                orders.push(item.id);
                break;
              }
            }
          });

          io.sockets.in(data.email).emit('orders', { orders: orders });
        });

    });

  });
};
