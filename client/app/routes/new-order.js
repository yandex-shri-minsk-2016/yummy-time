import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      vendors: this.store.findAll('vendor')
    })
  }
});
