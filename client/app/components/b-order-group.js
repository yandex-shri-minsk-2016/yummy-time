import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-order__item'],

  actions: {
    sayHi() {
      console.log('hi, b-order-group');
    }
  }
});
