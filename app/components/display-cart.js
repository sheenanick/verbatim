import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeItem(book, price) {
      this.get('shoppingCart').remove(book, price);
    }
  }
});
