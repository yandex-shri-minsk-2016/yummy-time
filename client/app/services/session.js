import Ember from 'ember';
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({
  store: Ember.inject.service(),

  loadCurrentAccount: Ember.observer('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const jwt = Ember.getOwner(this).lookup('authenticator:jwt');
      const payload = jwt.getTokenData(this.get('session.authenticated.token'));

      this.get('store').find('account', payload).then((account) => {
        this.set('account', account);
      });
    } else {
      this.set('account', null);
    }
  })
});
