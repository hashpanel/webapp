var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
var form = require('../../../views/form.hbs');
var formTemplate = Handlebars.compile(form);

var Miner = require('../Miner.js');
//views
var AppView = require('./AppView.js');

module.exports = Backbone.View.extend({
  el: ".panel-body",
  initialize: function () {
    this.$el.html(formTemplate(this.model.toJSON()));
    $("#show-history" ).click(function() {
      $( "#history" ).toggle( "fast", function() {
        // Animation complete.
        console.log("show");
        });
    });
  },
  events: {
    "click #save": "save"
  },
  save: function save() {
    console.log("saved");
    Backbone.history.navigate("edit",{"trigger":true});
  },
});
