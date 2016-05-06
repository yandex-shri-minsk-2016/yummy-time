/* global $ */
import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  tagName: 'li',
  classNames: ['b-order-group'],

  isManager: Ember.computed(function() {
    return this.get('session.account.id') !== this.get('order.manager.id');
  }),

  allPaid: Ember.computed('portions.@each.paid', function() {
    return this.get('portions').isEvery('paid', true);
  }),

  click: (e) => {
    const target = $(e.target);

    if (target.hasClass('checkbox__text') || target.hasClass('checkbox__control')) {
      e.stopPropagation();
      return;
    }

    const elem = (e.target === this) ? target : target.parents('.b-order-group');

    if (!elem.length) {
      return;
    }

    elem.find('.b-order-group__summary').slideToggle(100);
  },

  actions: {
    toggleAll() {
      const value = this.get('allPaid');
      this.get('portions').forEach((portion) => {
        portion.set('paid', !value);
        portion.updateOrderMoney();
        portion.save();
      });
    }
  }
});
