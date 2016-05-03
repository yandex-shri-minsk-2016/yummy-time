import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    password: { serialize: false }
  }
});
