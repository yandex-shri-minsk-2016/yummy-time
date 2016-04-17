import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit({
        location: this.get('location'),
        manager: this.get('manager'),
        time: this.get('time')
      });
    }
  }
});