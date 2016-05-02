  'use strict';

  const nodemailer = require('nodemailer');
  const config = require('../../config/config');
  const mongoose = require('mongoose');
  const Order = require('../models/order');
  const Account = require('../models/account');
  const Portion = require('../models/portion');

  exports.connection = function(io) {
  //notifications
  io.sockets.on("connection", function (socket) {
    console.log('You have connected to the server', socket);
    socket.on('join', function (data) {
      console.log(data);
      console.log(data.message);
      console.log(data.order);
      socket.broadcast.emit('message', {msg: data.message});


  // find order
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
  .exec(function(err, a){
    console.log("final order:" + a);
    console.log("portions:" + a.portions);
    a.portions.forEach(function(item, i, arr) {

      Portion
      .findById(item.id)
      .populate({
        path: 'owner',
        model: 'Account'
      }).exec(function(err, b){
        console.log("final portion:" + b);
      });


    });

  });


  // send email
  var transporter = nodemailer.createTransport('smtps://yummytime.test%40gmail.com:yandex-shri-minsk-2016@smtp.gmail.com');

  var mailOptions = {
    from: 'yummytime.test@gmail.com',
    to: 'rei-li@mail.ru',
    subject: 'Notification',
    text: data.message
  };

  transporter.verify(function(error, success) {
   if (error) {
    console.log(error);
  } else {
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);

      }else{
        console.log('Message sent: ' + info.response);
      };
    });
  }
});


});
  });
};
