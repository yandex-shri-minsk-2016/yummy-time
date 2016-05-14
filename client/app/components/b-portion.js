import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-portion'],

  actions: {
    remove(portion) {
      portion.get('order').then((order) => {
        order.removePortion(portion);
        order.save().then(() => {
          portion.destroyRecord();
        });
      });
    },

    togglePaid(portion) {
      portion.toggleProperty('paid');
      portion.updateOrderMoney();
      portion.save();
    }
  }
});
