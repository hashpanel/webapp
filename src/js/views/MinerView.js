var Backbone = require('backbone');
var Miner = require('../Miner.js');
var _ = require('lodash');

_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

module.exports = Backbone.View.extend({
  tagName: "<tr>",
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.render);
  },
  template: _.template(
           "<td>{{powerUsage}}</td>" +
           "<td><a class='edit' href='#miner/{{id}}'>{{name}}</a></td>" +
           "<td>{{group}}</td>" +
           "<td>{{hashRate}}</td>" +
           "<td><i class='fa fa-edit fa-fw'></i>" +
           "<i style ='color:gray' class='fa fa-wrench fa-fw'></i></td>"
      ),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
