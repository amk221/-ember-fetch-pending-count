import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    // return jQuery.ajax('/assets/example.css');
    return fetch('/assets/example.css').then(response => response.text());
  }
});
