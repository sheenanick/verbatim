import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart(item, price) {
      this.sendAction('addToCart', item, price);
    }
  }
});
