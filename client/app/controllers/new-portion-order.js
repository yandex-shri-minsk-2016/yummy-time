import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addToOrder(order, account, attrs) {
      const portion = this.store.createRecord('portion', attrs);
      portion.set('order', order);
      portion.set('owner', account);
      portion.save().then(() => {
        const required = order.get('money.required');
        const total = order.get('money.total') + portion.get('cost');
        order.set('money.total', total);
        order.set('money.required', (total > required) ? total : required);

        order.get('portions').pushObject(portion);
        order.save();
      });
      this.transitionToRoute('orders');
    }
  }
});
