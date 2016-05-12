import Ember from 'ember';

export default Ember.Controller.extend({
  notifications: Ember.inject.service('notifications'),

  actions: {
    send(data, model) {
      this.get('notifications').sendOrderNotification(data.message, model.order.id);
    }
  }
});
