import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    send(data) {

      console.log(data.message);
      $.ajax({
        type: "POST",
        url: "http://localhost:3000",
        data: { msg: data.message }
      })
      // this.transitionToRoute('notify', data.message);
    }
  }
});
