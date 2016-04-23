import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  manager: DS.attr('string'),
  time: DS.attr('string'),
  portions: DS.hasMany('portion')
});
