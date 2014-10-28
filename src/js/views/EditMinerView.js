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
    console.log("starting");

    //should pull this.model actually from server using URL HASH
    this.$el.html(formTemplate(this.model.toJSON()));
  },
  events: {
    "click #save": "save",
    "click #show-history": "showHistory",
  },
  showHistory: function () {
    $("#history").toggle( "fast", function() {
      // Animation complete.
      console.log("show");
    });
  },
  save: function save() {
     //Save properties

     this.model.set("name",this.$('#miner-name').val());
     this.model.set("host",this.$('#miner-host').val());
     this.model.set("port",this.$('#miner-port').val());
     this.model.set("address",this.$('#miner-address').val());

     this.model.save();
     console.log(this.model.toJSON());

     Backbone.history.navigate("miner/"+this.model.get("id"),{"trigger":true});
  },
});
