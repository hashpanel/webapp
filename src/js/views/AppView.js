var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;

var Miner = require('../Miner.js');
var MinerCollection = require('../collections/MinerCollection.js');
var MinerView = require('./MinerView.js');

module.exports = Backbone.View.extend({
  initialize: function () {
    var a =  new Miner ({'id': 3, 'name':'Pluto','model': 'blade', 'group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
    var b =  new Miner ({'id': 4, 'name':'Mars', 'model': 'blade','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

    var aView = new MinerView({model:a});
    var bView = new MinerView({model:b});
    var Servers = new MinerCollection.Miners();
    Servers.add(a);
    Servers.add(b);
    this.Servers = Servers;
     $("#miners").append(aView.render().el);
     $("#miners").append(bView.render().el);
  },
  events: {
  "click #save": "refresh"
  },
  refresh: function () {
    console.log('refresh');
  },
});
