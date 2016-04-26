import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.attrs.submit({
        text: this.get('text'),
        cost: this.get('cost'),
        paid: this.get('paid')
      });
    }
  }
});
