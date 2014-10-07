var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
/** templates **/

var form = require('./views/form.hbs');
var formTemplate = Handlebars.compile(form);


//views
var AppView = require('./src/js/views/AppView.js');
var MinerView = require('./src/js/views/MinerView.js');
var EditMiner = require('./src/js/views/EditMinerView.js');

//models
var Miner = require('./src/js/Miner.js');

var AppRouter = new (Backbone.Router.extend({
  initialize: function () {
    this.App = new AppView();
    console.log(this.App.Servers);
  },
  routes: {
    "index":      "",
    "miner/:id":  "edit",
    "new":        "new",
    "miner/:id/status": "status"
  },
  index: function() {
    //$("#miners").append(aView.render().el);
  },
  events: {
  "click td": "edit",
  "click #save": "refresh"
  },
  refresh: function () {
    console.log('refresh');
  },
  edit: function(id) {
    var item = this.App.Servers.get({'id':id});
    console.log(item);
    //should pass in the actual modelID
    var existingView = new EditMiner({model:item});
    //$(".panel-body").html(formTemplate(item.toJSON()));
  },
  new: function() {
    console.log("clicked");
    var blankMiner = new Miner();
    var newView = new EditMiner({model:blankMiner});
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
