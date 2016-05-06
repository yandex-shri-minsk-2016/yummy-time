import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-order__item'],

  allPaid: Ember.computed('portions.@each.paid', function() {
    return this.get('portions').isEvery('paid', true);
  }),

  actions: {
    sayHi() {
      console.log('hi, b-order-group');
    }
  }
});
