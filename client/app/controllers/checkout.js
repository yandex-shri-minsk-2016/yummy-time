import Ember from 'ember';

export default Ember.Controller.extend({
  notifications: Ember.inject.service(),

  actions: {
    send(data, model) {
      this.get('notifications').sendOrderNotification(data.message, model.order.id);
    }
  }
});
