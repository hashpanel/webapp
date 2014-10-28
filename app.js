var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;


//views
var AppView = require('./src/js/views/AppView.js');
var MinerView = require('./src/js/views/MinerView.js');
var EditMiner = require('./src/js/views/EditMinerView.js');

//models
var Miner = require('./src/js/Miner.js');

var App = new AppView();

var AppRouter = new (Backbone.Router.extend({
  routes: {
    "index":      "",
    "miner/:id":  "edit",
    "new":        "new",
    "miner/:id/status": "status"
  },
  index: function() {

  },
  events: {
  "click td": "edit",
  "click #save": "refresh"
  },
  refresh: function () {
    console.log('refresh');
  },
  edit: function(id) {
    var item = App.Servers.get({'id':id});
    //should pass in the actual modelID
    new EditMiner({model:item});
  },
  new: function() {
    var blankMiner = new Miner({"name":"", "host":""});
    new EditMiner({model:blankMiner});
    $("#server-details").hide();
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
