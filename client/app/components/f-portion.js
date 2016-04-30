import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    submit() {
      this.attrs.submit(
        this.get('session.account'),
        this.getProperties('text', 'cost')
      );
    }
  }
});
