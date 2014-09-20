var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var a =  new Miner ({'name':'Pluto','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
var aView = new MinerView({model:a});
//var Servers = new MinerCollection.Miners();

var AppRouter = Backbone.Router.extend({

  routes: {
    "":             "",
    "miner/:miner":      "edit",
    "miner/new":         "new",
    "/miner/:id/status": "status"
  },
  index: function () {
    console.log("sanity check");
  },
  edit: function(miner) {
    console.log("foo");
    this.navigate("miner#"+miner);
  },

  new: function() {
  },

  status: function(id) {
  }

});
var app = new AppRouter();
Backbone.history.start();

 $("#miners").append(aView.render().el);
