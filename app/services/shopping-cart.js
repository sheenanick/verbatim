import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemsInCart: false,
  total: 0,
  add(item) {
    if (parseInt(item.get('quantity')) === 0) {
      this.get('items').pushObject(item);

    }
    this.set('itemsInCart', true);
    var currentTotal = this.get('total');
    currentTotal += parseInt(item.get('price'));
    this.set('total', currentTotal);

    item.set('quantity', parseInt(item.get('quantity'))+1);
  },
  remove(item) {
    if (parseInt(item.get('quantity')) === 1) {
      this.get('items').removeObject(item);
    }
    item.set('quantity', parseInt(item.get('quantity'))-1);

    var currentTotal = this.get('total');
    currentTotal -= parseInt(item.get('price'));
    this.set('total', currentTotal);
    if (this.get('items').length === 0) {
      this.set('itemsInCart', false);
    }
  }
});
