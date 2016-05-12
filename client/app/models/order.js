import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  vendor: DS.belongsTo('vendor'),
  location: DS.attr('string'),
  manager: DS.belongsTo('account'),
  time: DS.attr('string'),
  money: DS.attr({ defaultValue: () => ({}) }),
  portions: DS.hasMany('portion'),
  active: DS.attr('boolean', { defaultValue: true }),

  isReady: Ember.computed('money.total', 'money.required', function() {
    return this.get('money.total') >= this.get('money.required');
  }),

  addPortion(portion) {
    const total = this.get('money.total');
    const cost = portion.get('cost');

    this.set('money.total', total + cost);
    this.get('portions').pushObject(portion);
  }
});
