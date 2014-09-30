var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars')

/** templates **/
var form = require('./miner/form.hbs');

/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var a =  new Miner ({'id': 3, 'name':'Pluto','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
var b =  new Miner ({'id': 4, 'name':'Mars','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

var aView = new MinerView({model:a});
var bView = new MinerView({model:b});
var Servers = new MinerCollection.Miners();
Servers.add(a);
var AppRouter = new (Backbone.Router.extend({

  routes: {
    "index":             "",
    "miner/:id":             "edit",
    "miner/new":         "new",
    "/miner/:id/status": "status"
  },
  index: function () {
    console.log("sanity check");
    $("#miners").append(aView.render().el);
    console.log("hi");

  },
  edit: function(miner) {
    console.log("foo",miner);
    $("#app-window").append(form);
    this.navigate("miner/"+miner, {trigger: false});
    console.log(form);
  },

  new: function() {
  },

  status: function() {
  },
  start: function(){
    Backbone.history.start();//{pushState: true}
  }
}))();


$(function(){
  AppRouter.start();
});


 $("#miners").append(aView.render().el);
 $("#miners").append(bView.render().el);
