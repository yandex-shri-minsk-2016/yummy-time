import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate(credentials) {
      const authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials)
        .then(() => {
          this.set('errorMessage', null);
          this.transitionToRoute('orders');
        })
        .catch((reason) => {
          this.set('errorMessage', reason.message || reason);
        });
    }
  }
});
