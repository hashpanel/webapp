var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;

var Miner = require('../Miner.js');
var MinerCollection = require('../collections/MinerCollection.js');
var MinerView = require('./MinerView.js');

module.exports = Backbone.View.extend({
  initialize: function () {

    var Servers = new MinerCollection();
    Servers.fetch({
      success: function (){
        Servers.each(function (data) {
          var miner = new Miner(data.attributes);
          var view = new MinerView({model: miner});
          $("#miners").append(view.render().el);
        });
      }
    });
    this.Servers = Servers;
  },
  events: {
  "click #save": "refresh"
  },
  refresh: function () {
    console.log('refresh');
  },
});
