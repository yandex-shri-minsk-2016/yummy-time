import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import BodyClassMixin from 'ember-body-class/mixins/body-class';

export default Ember.Route.extend(ApplicationRouteMixin, BodyClassMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    this.get('session').loadCurrentAccount();
  }
});
