import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    }
  }
});
