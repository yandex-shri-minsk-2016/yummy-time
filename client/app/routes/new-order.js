import Ember from 'ember';
import Order from 'client/models/order';

export default Ember.Route.extend({
  model() {
    return {
      restaurants: [ { name: "pzz", id: 1 }, { name: "tempo", id: 2 } ],
      order: {
        name: "Вася",
        phone: "+375 33 333 33 33",
        comment: "Маргарита 1шт без сыра",
        amount: "100 000"
      }
    }
  }
});
