import Ember from 'ember';

export default Ember.Component.extend({
  vendor: null,

  actions: {
    setVendor(vendor) {
      this.set('vendor', vendor);
    },

    submit() {
      this.attrs.submit(this.getProperties('location', 'manager', 'time'));
    }
  }
});
