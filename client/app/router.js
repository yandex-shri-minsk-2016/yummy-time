import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  // eslint-disable-next-line prefer-arrow-callback
  this.route('orders', function() {});
  this.route('new-order', { path: '/orders/new' });
  this.route('new-portion-order', { path: '/orders/:order_id/portions/new' });
  this.route('register');
  this.route('login');
  this.route('vendors', { path: '/vendors' });
  this.route('checkout', {path: '/orders/:order_id/checkout'});
});

export default Router;
