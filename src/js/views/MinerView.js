var Backbone = require('backbone');
var Miner = require('../Miner.js');
var _ = require('lodash');

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

module.exports.MinerView = Backbone.Collection.extend({
  tagName: "<tr>",
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.render);
  },
  template: _.template(
      "<tr><td>{{name}}</td>" +
           "<td>{{group}}</td>" +
           "<td>{{hashRate}}</td></tr>"
      ),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
},
});
