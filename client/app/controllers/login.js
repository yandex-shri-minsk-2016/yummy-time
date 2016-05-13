import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  torii: Ember.inject.service(),

  actions: {
    authenticateVia(provider) {
      this.get('torii').open(provider).then((data) => {
        this.get('session').authenticate('authenticator:exchange-jwt', provider, data).then(() => {
          this.transitionToRoute('orders');
        });
      });
    },

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
