import Ember from 'ember';

export default Ember.Component.extend({
  click: (e) => {
    if ($(e.target).hasClass('b-order__checkbox-text') || $(e.target).hasClass('b-order__checkbox')) {
      e.stopPropagation();
      return;
    }

    let elem = (e.target === this) ? $(e.target) : $(e.target).parents('.b-order__item');

    if (!elem.length) {
      return;
    }

    elem.find('.b-order__summary').slideToggle(100);
  }
});
