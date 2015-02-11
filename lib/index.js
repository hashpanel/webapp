global.moment = require('moment');
global._ = require('lodash');
global.$ = global.jQuery = require('jquery');
global.React = require('react');
global.React.Bootstrap = require('react-bootstrap');
global.React.Router = require('react-router');
_.defaults(global.React.Bootstrap, require('react-router-bootstrap'));

Backbone = require('backbone');
Backbone.$ = global.$;
Backbone.$.ajax = $.ajax;
global.HashwareClient = require('hashware-backbone-client');
require('react.backbone');
