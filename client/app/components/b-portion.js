import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-portion'],

  actions: {
    togglePaidStatus(portion) {
      portion.toggleProperty('paid');
      portion.save();
    }
  }
});
