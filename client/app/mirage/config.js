export default function() {

  this.get('/orders', function(db, request) {
    return {
      data: [
        {
          id: 1,
          type: "order",
          attributes: {
            place: "Пицца Темпо",
            time: "14:00",
            manager: "Vital",
            amount: 300000
          }
        },
        {
          id: 2,
          type: "order",
          attributes: {
            place: "Лидо",
            time: "16:00",
            manager: "Vasia",
            amount: 200000
          }
        },
      ]
    };
  });

  this.post('/orders', function(db, request) {
    return JSON.parse(request.requestBody);
  });

}
