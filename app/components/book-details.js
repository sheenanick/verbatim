import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart(item) {
      this.sendAction('addToCart', item);
    }
  },
  genre: Ember.computed('book.genre.name', function() {
    var genre = this.get('book.genre.name');
    var output;
    if(genre) {
      output = genre.charAt(0).toUpperCase() + genre.slice(1);
    }

    return output;
  })
});
