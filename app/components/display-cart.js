import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeQuantity(book) {
      this.get('shoppingCart').remove(book);
    },
    addQuantity(book) {
      this.get('shoppingCart').add(book);
    }
  }
});
