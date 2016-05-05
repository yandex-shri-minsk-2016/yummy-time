/* global $ */

import Ember from 'ember';

export default Ember.Component.extend({
  click: (e) => {
    const target = $(e.target);

    if (target.hasClass('checkbox__text') || target.hasClass('checkbox__control')) {
      e.stopPropagation();
      return;
    }

    const elem = (e.target === this) ? target : target.parents('.b-order__item');

    if (!elem.length) {
      return;
    }

    elem.find('.b-order__summary').slideToggle(100);
  },

  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    }
  }
});
