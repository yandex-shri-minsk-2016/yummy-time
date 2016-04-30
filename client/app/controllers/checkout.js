import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  socketService: Ember.inject.service('socket-io'),

  actions: {
    send(data) {

      console.log(data.message);

      this._super.apply(this, arguments);

      var socketIO = this.get('socketService').socketFor('http://localhost:3000/');

      socketIO.emit('join', {message: data.message});
    }
  }
});
