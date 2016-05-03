import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  open: false,

  openClass: Ember.computed('open', function() {
    return this.get('open') ? 'open' : '';
  }),

  isSign: Ember.computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated') ? '' : 'wrapper__no-sign';
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    slide() {
      this.toggleProperty('open');
    },
    hideMenu() {
      this.set('open', false);
    }
  }

});
