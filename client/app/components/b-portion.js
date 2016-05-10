import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-portion'],

  actions: {
    togglePaid(portion) {
      portion.toggleProperty('paid');
      portion.updateOrderMoney();
      portion.save();
    }
  }
});
