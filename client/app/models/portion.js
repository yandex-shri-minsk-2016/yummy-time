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
      const available = order.get('money.available');
      order.set('money.available',
        available + ((this.get('paid')) ? +cost : -cost)
      );
      order.save();
    });
  })
});
