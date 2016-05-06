import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-portion'],

  actions: {
    togglePaidStatus(portion) {
      portion.toggleProperty('paid');
      portion.save();

      portion.get('order').then((order) => {
        const cost = portion.get('cost');
        const available = order.get('money.available');
        order.set('money.available',
          available + ((portion.get('paid')) ? +cost : -cost)
        );
        order.save();
      });
    }
  }
});
