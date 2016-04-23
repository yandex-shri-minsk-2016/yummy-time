import Ember from 'ember';

var portions =  [{
 id: 1,
 text: 'Grand Old Mansion',
 cost: '21 0000',
 paid: 'false'
}, {
  id: 2,
  text: 'Grand Old Mansion',
  cost: '20 0000',
  paid: 'false'
}, {
  id: 3,
  text: 'Grand Old Mansion',
  cost: '50 0000',
  paid: 'false'
}];


export default Ember.Route.extend({
  model(params){
  return Ember.RSVP.hash({
    order: this.store.findRecord('order', params.order_id),
    portions:portions
  });
}
});
