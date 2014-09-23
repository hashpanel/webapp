var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var a =  new Miner ({'id': 3, 'name':'Pluto','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

var aView = new MinerView({model:a});
var Servers = new MinerCollection.Miners();
Servers.add(a);
var AppRouter = new (Backbone.Router.extend({

  routes: {
    "index":             "",
    "miner/:miner":      "edit",
    "miner/new":         "new",
    "/miner/:id/status": "status"
  },
  index: function () {
    console.log("sanity check");
    $("#miners").append(aView.render().el);
    console.log("hi");

  },
  edit: function(miner) {
    console.log("foo");
    this.navigate("miner#"+miner, {trigger: true});
  },

  new: function() {
  },

  status: function(id) {
  },
  start: function(){
    Backbone.history.start();//{pushState: true}
  }
}))();
$(function(){
  AppRouter.start();
  AppRouter.index();
});


 $("#miners").append(aView.render().el);
