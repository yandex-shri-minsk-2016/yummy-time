import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  order: Ember.computed.alias('model.order'),
  socketService: Ember.inject.service('socket-io'),

  init: function() {
    this._super.apply(this, arguments);

    var socketIO = this.get('socketService').socketFor('http://localhost:3000/');

    socketIO.on('message', function(data) {
        if (Notification.permission === "granted") {
          var notification = new Notification(data.msg);
        }
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {

            if (permission === "granted") {
              var notification = new Notification(data.msg);
            }
          });
        }
      }, this);
  },



  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    },

    msg() {
     this.attrs.msg(
      this.getProperties('message')
      );
   }
  }

});
