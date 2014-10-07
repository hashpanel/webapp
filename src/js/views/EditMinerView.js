var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
var form = require('../../../views/form.hbs');
var formTemplate = Handlebars.compile(form);

var Miner = require('../Miner.js');
//var MinerView = require('./MinerView.js');

module.exports = Backbone.View.extend({
  el: ".panel-body",
  initialize: function () {
    this.$el.html(formTemplate(this.model.toJSON()));
  },
  events: {
    "click #save": "save"
  },
  save: function save() {
    console.log("saved");
    this.trigger("saved");
  },
});
