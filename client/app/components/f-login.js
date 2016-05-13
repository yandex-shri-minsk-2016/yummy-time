import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticateVia(provider) {
      this.attrs.authenticateVia(provider);
    },

    submit() {
      this.attrs.submit(this.getProperties('identification', 'password'));
    }
  }
});
