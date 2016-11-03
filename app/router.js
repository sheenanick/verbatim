import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', {path: '/book/:book_id'});
  this.route('fiction');
  this.route('poetry');
  this.route('mystery');
  this.route('horror');
  this.route('biography');
});

export default Router;
