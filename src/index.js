console.log('app: hashpanel');

/**
 * @namespace hashpanel
 */
global._ = require('lodash');
global.$ = global.jQuery = require('browserify-zepto');
global.React = require('react');
global.React.Bootstrap = require('react-bootstrap');

global.hashpanel = {
  api: null,
  session: { },
  components: require('./components'),
  views: require('./views')
};

hashpanel.router = require('./router.jsx');

var client = require('hashware-backbone-client');
Backbone.$ = global.$;
require('react.backbone');

client.create('http://localhost:1337/api/v1/backbonemodel')
  .then(function (api) {
    hashpanel.api = api;
    hashpanel.router.start();
  });
