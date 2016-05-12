import Ember from 'ember';

export default Ember.Service.extend({
  socketService: Ember.inject.service('socket-io'),
  session: Ember.inject.service(),

  getSocket: function() {
    return this.get('socketService').socketFor('http://localhost:3000/');
  },

  setNotificationCookie: function(orderId) {
    var isCookieExists = this.getIfNotificationCookieSet(orderId);
    if (!isCookieExists) {
      const oneDay = 1 * 24 * 60 * 60 * 1000;
      var date = new Date();
      date.setTime(date.getTime() + oneDay);
      var expires = '; expires=' + date.toGMTString();
      document.cookie = 'ROOMS_JOINED_' + orderId + '=' + orderId + expires + '; path=/';
    }
  },

  removeNotificationCookie: function(orderId) {
    var isCookieExists = this.getIfNotificationCookieSet(orderId);
    if (isCookieExists) {
      const oneDay = 1 * 24 * 60 * 60 * 1000;
      var date = new Date();
      date.setTime(date.getTime() - oneDay);
      var expires = '; expires=' + date.toGMTString();
      document.cookie = 'ROOMS_JOINED_' + orderId + '=' + expires;
    }
  },

  getIfNotificationCookieSet: function(orderId) {
    var connectedOrders = [];
    var name = 'ROOMS_JOINED_' + orderId + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return true;
      }
    }
    return false;
  },

  getOrdersFromCookies: function() {
    var connectedOrders = [];
    const name = 'ROOMS_JOINED_';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        var cookie = cookie.substring(name.length, cookie.length);
        const divider = '=';
        if (cookie.indexOf(divider) > 0) {
          var order = cookie.substring(cookie.indexOf(divider) + 1, cookie.length);
          connectedOrders.push(order);
        }
      }
    }
    return connectedOrders;
  },

  requestUserOrders: function(email) {
    var socketIO = this.getSocket();
    socketIO.emit('getOrders', { email: email });
  },

  joinToPrivateSession: function(email) {
    var socketIO = this.getSocket();
    socketIO.emit('join', { room: email });
  },

  sendOrderNotification: function(message, orderId) {
    var socketIO = this.getSocket();
    socketIO.emit('sendMessage', { message: message, order: orderId });
  },

  subscribeOrderNotification: function(orderId) {
    this.setNotificationCookie(orderId);
    var socketIO = this.getSocket();
    socketIO.emit('join', { room: orderId });
  },

  subscribeNotifications: function() {
    var notification = this;
    var orders = notification.getOrdersFromCookies();
    orders.forEach(function(item) {
      notification.subscribeOrderNotification(item);
    });
  },

  subscribeNotificationsOnLogin: function(email) {
    this.joinToPrivateSession(email);
    this.requestUserOrders(email);
  },

  unsubscribeFromOrderNotifications: function() {
    var socketIO = this.getSocket();
    var notification = this;
    var orders = notification.getOrdersFromCookies();
    orders.forEach(function(item) {
      socketIO.emit('leave', { room: item });
      notification.removeNotificationCookie(item);
    });
  },

  init: function(email) {
    this._super.apply(this, arguments);
    var socketIO = this.getSocket();


    socketIO.on('message', function(data) {
      var options = {
        body: data.msg,
        icon: 'assets/img/notify-icon.jpg'
      };

      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          var notification = new Notification('Yummy Time', options);
          notification.onclick = function(event) {
            event.preventDefault();
            notification.close();
          };
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function(permission) {
            if (permission === 'granted') {
              var notification = new Notification('Yummy Time', options);
            }
          });
        }
      } else {
        console.log('This browser does not support desktop notification');
      }
    }, this);


    socketIO.on('orders', function(data) {
      var notification = this;
      data.orders.forEach(function(orderId) {
        notification.subscribeOrderNotification(orderId);
      });
      socketIO.emit('leave', { room: email });
    }, this);
  }
});
