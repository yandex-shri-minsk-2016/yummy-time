import Ember from 'ember';
import TokenAuthenticator from 'ember-simple-auth-token/authenticators/jwt';

export default TokenAuthenticator.extend({
  ajax: Ember.inject.service(),

  authenticate(provider, data) {
    const ajax = this.get('ajax');

    return ajax.request(`/auth/${provider}`, {
      type: 'POST',
      dataType: 'json',
      data: { code: data.authorizationCode }
    }).then((res) => res);
  }
});
