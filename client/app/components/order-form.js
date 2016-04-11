import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit({
        place: this.get('place'),
        manager: this.get('manager'),
        time: this.get('time'),
        amount: this.get('amount')
      });
    }
  }
});
