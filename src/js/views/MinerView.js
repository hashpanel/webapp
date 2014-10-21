var Backbone = require('backbone');
var _ = require('lodash');

/** Templates **/

var Handlebars = require('handlebars');
var form = require('../../../views/form.hbs');
var minerItem = require('../../../views/miner.hbs');
var formTemplate = Handlebars.compile(form);
var minerTemplate = Handlebars.compile(minerItem);

_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

module.exports = Backbone.View.extend({
  tagName: "<tr>",
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.render);
  },
  edit: function() {
    this.$("#appbody").html(formTemplate(this.model.toJSON()));
  },
  registered: function () {
    console.log("registered");
  },
  render: function() {
    this.$el.html(minerTemplate(this.model.toJSON()));
    return this;
  },
});
