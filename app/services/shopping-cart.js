import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemsInCart: false,
  total: 0,
  add(item, price) {
    this.get('items').pushObject(item);
    this.set('itemsInCart', true);
    console.log(item);
    var currentTotal = this.get('total');
    currentTotal += parseInt(price);
    this.set('total', currentTotal);
  }
});
