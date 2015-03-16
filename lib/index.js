window.moment = require('moment');
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.React = require('react');
window.React.Bootstrap = require('react-bootstrap');
window.React.Router = require('react-router');
window.Griddle = require('griddle-react');
//_.defaults(window.React.Bootstrap, require('react-router-bootstrap'));
//

window.Backbone = require('backbone');
window.Backbone.$ = window.$;
window.Backbone.$.ajax = $.ajax;
window.Backbone.ajax = $.ajax;
window.HashwareClient = require('hashware-backbone-client');
require('react.backbone');
