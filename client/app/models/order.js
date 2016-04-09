import DS from 'ember-data';

export default DS.Model.extend({
  organizerName: DS.attr('string'),
  orderTime: DS.attr('string'),
  moneyRequired: DS.attr('number'),
  moneyCurrent: DS.attr('number')
});
