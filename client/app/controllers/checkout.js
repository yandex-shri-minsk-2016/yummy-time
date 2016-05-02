import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  socketService: Ember.inject.service('socket-io'),

  actions: {
    send(data, model) {

      console.log(data.message);
      console.log('controller model: ', model);
      var order = model.order;
        console.log('controller order: ', order);
        var orderId = order.id;
        console.log('controller order id: ', orderId);

      this._super.apply(this, arguments);
      var socketIO = this.get('socketService').socketFor('http://localhost:3000/');
      socketIO.emit('join', {message: data.message, order: orderId});
    }
  }
});
