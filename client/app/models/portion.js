import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  cost: DS.attr('number'),
  paid: DS.attr('boolean'),
  owner: DS.attr('string'),
  order: DS.belongsTo('order')
});
