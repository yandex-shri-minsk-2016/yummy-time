import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  order: Ember.computed.alias('model.order'),

  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    },

    msg() {
      this.attrs.msg(
        this.getProperties('message'),
        this.get('model')
        );
    }
  }

});
