import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  cost: DS.attr('number'),
  paid: DS.attr('boolean'),
  owner: DS.belongsTo('account'),
  order: DS.belongsTo('order'),

  paidChanged: Ember.observer('paid', function() {
    this.get('order').then((order) => {
      const cost = this.get('cost');
      const value = (this.get('paid')) ? +cost : -cost;
      const available = order.get('money.available');

      if (value > 0 || available > 0) {
        order.set('money.available', available + value);
        order.save();
      }
    });
  })
});
