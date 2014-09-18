var Backbone = require('backbone');
var Miner = require('../Miner.js');
var _ = require('lodash');

module.exports.MinerView = Backbone.Collection.extend({
  tagName: "<tr>",
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.render);
  },
  template: _.template($('body').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
},
});
