import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createOrder(vendor, attrs) {
      let order = this.store.createRecord('order', attrs);
      order.set('vendor', vendor);
      order.save();
      this.transitionToRoute('orders');
    }
  }
});
