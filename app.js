var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;
var Handlebars = require('handlebars');
/** templates **/

var form = require('./views/form.hbs');
var formTemplate = Handlebars.compile(form);

var AppView = require('./src/js/views/AppView.js');
var NewMinerView = require('./src/js/views/NewMinerView.js');

var AppRouter = new (Backbone.Router.extend({
  initialize: function () {
    var App = new AppView();
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
  "click td": "edit"
  },
  edit: function(id) {
    console.log(id);
    //should pass in the actual modelID
    $(".panel-body").html(formTemplate(id));
  },
  new: function() {
    console.log("clicked");
    var newMiner = new NewMinerView();
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
