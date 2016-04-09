import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit({
        place: this.get('place'),
        manager: this.get('manager'),
        orderTime: this.get('orderTime')
      });
    }
  }
});
