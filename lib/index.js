global._ = require('lodash');
global.$ = global.jQuery = require('jquery');
global.React = require('react');
global.React.Bootstrap = require('react-bootstrap');
global.React.Router = require('react-router');
global.HashwareClient = require('hashware-backbone-client');
Backbone.$ = global.$;
Backbone.$.ajax = $.ajax;
require('react.backbone');
