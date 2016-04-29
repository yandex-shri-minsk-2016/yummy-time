import Ember from 'ember';

export default Ember.Component.extend({
  order: Ember.computed.alias('model.order'),

  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    }
  }
});
