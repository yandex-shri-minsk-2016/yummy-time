import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orders', function() {});
  this.route('new-order', {path: '/orders/new'});
  this.route('new-portion-order', {path: '/orders/:order_id/portions/new'});
  this.route('register');
  this.route('login');
  this.route('food-vendors', { path: '/vendors' });
});

export default Router;
