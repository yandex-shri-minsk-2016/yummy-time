import DS from 'ember-data';

export default DS.Model.extend({
  vendor: DS.belongsTo('vendor'),
  location: DS.attr('string'),
  manager: DS.belongsTo('account'),
  time: DS.attr('string'),
  money: DS.attr({ defaultValue: () => ({}) }),
  portions: DS.hasMany('portion'),
  active: DS.attr('boolean', { defaultValue: true })
});
