import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['title:asc'],
  sortedBooks: Ember.computed.sort('books', 'sortBy'),
  actions: {
    sort(params) {
      params += ":asc";
      this.set('sortBy', [params]);
    }
  }
});
