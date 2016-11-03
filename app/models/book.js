import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  genre: DS.belongsTo('genre', {async:true}),
  price: DS.attr(),
  image: DS.attr(),
  pages: DS.attr(),
  synopsis: DS.attr(),
  publisher: DS.attr(),
  isbn: DS.attr(),
  date: DS.attr(),
  quantity: DS.attr()
});
