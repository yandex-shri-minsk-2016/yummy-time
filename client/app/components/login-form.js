import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit(this.getProperties('identification', 'password'));
    }
  }
});
