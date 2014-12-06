global._ = require('lodash');
global.$ = global.jQuery = require('browserify-zepto');
global.React = require('react');
global.React.Bootstrap = require('react-bootstrap');
global.React.Router = require('react-router');
global.HashwareClient = require('hashware-backbone-client');
Backbone.$ = global.$;
require('react.backbone');
