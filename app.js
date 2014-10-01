var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
/** templates **/
var form = require('./views/form.hbs');
var formTemplate = Handlebars.compile(form);

/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var a =  new Miner ({'id': 3, 'name':'Pluto','model': 'blade', 'group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
var b =  new Miner ({'id': 4, 'name':'Mars', 'model': 'blade','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

var aView = new MinerView({model:a});
var bView = new MinerView({model:b});
var Servers = new MinerCollection.Miners();
Servers.add(a);

var AppRouter = new (Backbone.Router.extend({

  routes: {
    "index":            "",
    "miner/:id":        "edit",
    "new":        "new",
    "miner/:id/status": "status"
  },
  index: function () {
    $("#miners").append(aView.render().el);
  },
  new: function() {
    console.log("clicked");
    $("#appbody").html(formTemplate({}));
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
