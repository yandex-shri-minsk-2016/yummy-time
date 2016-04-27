import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToOrder(order, account, attrs) {
      const portion = this.store.createRecord('portion', attrs);
      portion.set('order', order);
      portion.set('owner', account);
      portion.save().then(() => {
        order.get('portions').pushObject(portion);
        order.save();
      });
      this.transitionToRoute('orders');
    }
  }
});
