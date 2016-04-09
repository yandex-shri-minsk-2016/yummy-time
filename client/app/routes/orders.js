import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        type: "order",
        attributes: {
          organizerName: "Пицца Темпо",
          orderTime: "14:00",
          moneyRequired: 300000,
          moneyCurrent: 100000
        }
      },
      {
        id: 2,
        type: "order",
        attributes: {
          organizerName: "Лидо",
          orderTime: "16:00",
          moneyRequired: 200000,
          moneyCurrent: 0
        }
      },
    ]
  }
});
