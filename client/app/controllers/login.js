import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate(credentials) {
      let authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials)
        .then((res) => {
          this.set('errorMessage', null);
          this.transitionToRoute('orders');
        })
        .catch((reason) => {
          this.set('errorMessage', reason.message || reason);
        })
    }
  }
});
