var Backbone = require('backbone');
var $ = require('jquery');
Backbone.LocalStorage = require("backbone.localstorage");
Backbone.$ = $;

var Miner = require('../Miner.js');
var MinerCollection = require('../collections/MinerCollection.js');
var MinerView = require('./MinerView.js');
var testdata = require('./../../../data/test.json');

module.exports = Backbone.View.extend({
  initialize: function () {

    var Servers = new MinerCollection();
    Servers.fetch({
      success: function (){
        Servers.each(function (data) {
          console.log("Data from the model", data);
          //$("#miners").append(data.render().el);
          var miner = new Miner(data.attributes);
          var view = new MinerView({model: miner});
          console.log(view.render().el);
          $("#miners").append(view.render().el);
        });
      }
    });
      // var a =  new Miner ({'id': 3, 'name':'Pluto','model': 'blade', 'group':'Solar','hashRate':'6 G/HS','powerUsage': 6});
      // var b =  new Miner ({'id': 4, 'name':'Mars', 'model': 'blade','group':'Solar','hashRate':'6 G/HS','powerUsage': 6});

      // var aView = new MinerView({model:a});
      // var bView = new MinerView({model:b});

      // Servers.add(a);
      // Servers.add(b);
      //console.log(Servers);
      // $("#miners").append(aView.render().el);
      // $("#miners").append(bView.render().el);
      this.Servers = Servers;


  },
  events: {
  "click #save": "refresh"
  },
  refresh: function () {
    console.log('refresh');
  },
});
