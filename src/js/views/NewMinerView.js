var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
var form = require('../../../views/form.hbs');
var formTemplate = Handlebars.compile(form);

var Miner = require('../Miner.js');
var MinerCollection = require('../collections/MinerCollection.js');
var MinerView = require('./MinerView.js');

module.exports = Backbone.View.extend({
  el: ".panel-body",
  initialize: function () {
    var miner = new Miner();
    this.$el.html(formTemplate({}));
  },
  events: {
    "click #save": "save"
  },
  save: function save() {
    console.log("saved");
    this.trigger("saved");
  }
});
