import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  vendor: null,

  actions: {
    setVendor(vendor) {
      this.set('vendor', vendor);
    },

    submit() {
      this.attrs.submit(
        this.get('vendor'),
        this.get('session.account'),
        this.getProperties('location', 'time')
      );
    }
  }
});
