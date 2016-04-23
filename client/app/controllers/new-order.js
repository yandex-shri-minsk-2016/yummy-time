import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createOrder(attrs) {
      Ember.Logger.log(attrs);
      const order = this.store.createRecord('order', attrs);
      order.save();
      this.transitionToRoute('orders');
    }
  }
});
