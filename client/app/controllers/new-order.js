import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createOrder(place) {
      Ember.Logger.log(place);
    }
  }
});
