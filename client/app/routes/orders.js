import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        type: "order",
        attributes: {
          place: "Пицца Темпо",
          orderTime: "14:00",
          manager: "Vital",
          amount: 300000
        }
      },
      {
        id: 2,
        type: "order",
        attributes: {
          place: "Лидо",
          orderTime: "16:00",
          manager: "Vasia",
          amount: 200000
        }
      },
    ]
  }
});
