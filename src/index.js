/**
 * @namespace hashpanel
 */
global.hashpanel = {
  api: { },
  session: { }
};

global._ = require('lodash');
global.$ = require('browserify-zepto');
global.React = require('react');
global.React.Bootstrap = require('react-bootstrap');

global.BackboneClient = require('hashware-backbone-client');

require('react.backbone');

require('./router.jsx');
