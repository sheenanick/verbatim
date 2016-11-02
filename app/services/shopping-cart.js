import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemsInCart: false,
  total: 0,
  add(item, price) {
    this.get('items').pushObject(item);
    this.set('itemsInCart', true);
    var currentTotal = this.get('total');
    currentTotal += parseInt(price);
    this.set('total', currentTotal);
  },
  remove(item, price) {
    this.get('items').removeObject(item);
    var currentTotal = this.get('total');
    currentTotal -= parseInt(price);
    this.set('total', currentTotal);
    if (this.get('items').length === 0) {
      this.set('itemsInCart', false);
    }
  }
});
