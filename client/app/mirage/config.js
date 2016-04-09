export default function() {

  this.get('/orders', function(db, request) {
    return {
      data: [
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
      ]
    };
  });

}
