import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import BodyClassMixin from 'ember-body-class/mixins/body-class';

export default Ember.Route.extend(ApplicationRouteMixin, BodyClassMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    this.get('session').loadCurrentAccount();
  },

  renderTemplate: function(controller, model) {
    var this_ = this;
    this.render('application');             // render the application template
    Ember.$(window).on('resize.removeOpenClass', function() {     // setup resize listener on the window object that will be called when window resizes
      this_.controllerFor('application').set('open', false);
    });
  }
});
