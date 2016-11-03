import Ember from 'ember';

export default Ember.Route.extend({
  index: true,
  model() {
    return this.store.findAll('book');
  }
});
