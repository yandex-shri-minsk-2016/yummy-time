import DS from 'ember-data';

export default DS.Model.extend({
  place: DS.attr('string'),
  manager: DS.attr('string'),
  orderTime: DS.attr('string'),
  amount: DS.attr('number')
});
