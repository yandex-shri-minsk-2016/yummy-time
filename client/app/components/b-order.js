import Ember from 'ember';
import { groupBy } from '../helpers/group-by';

export default Ember.Component.extend({
  groupedPortions: Ember.computed('portions.[]', function() {
    return groupBy(this.get('portions'), 'owner.id');
  }),

  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    }
  }
});
