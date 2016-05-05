import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['b-portion'],

  click(e) {
    const target = Ember.$(e.target);
    if (target.hasClass('checkbox__text') || target.hasClass('checkbox__control')) {
      this.togglePaidStatus(this.get('portion'));
    }
    return false;
  },

  togglePaidStatus(portion) {
    portion.toggleProperty('paid');
    portion.save();
  }
});
