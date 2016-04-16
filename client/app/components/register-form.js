import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit({
        email: this.get('email'),
        name: this.get('name'),
        password: this.get('password'),
        phone: this.get('phone')
      });
    }
  }
});
