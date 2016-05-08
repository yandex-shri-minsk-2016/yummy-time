import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize() {
    const json = this._super.apply(this, arguments);
    const password = json.data.attributes.password;
    if (typeof password === 'undefined' || password === null) {
      delete json.data.attributes.password;
    }

    return json;
  }
});
