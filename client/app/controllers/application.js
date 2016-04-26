import Ember from 'ember';

export default Ember.Controller.extend({
  openClass: Ember.computed('open', function() {
    return this.get('open') ? 'open' : '';
  }),
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    slide() {
      this.toggleProperty('open');
    }
  }
});
