var Backbone = require('backbone');
var Miner = require('../Miner.js');
Backbone.LocalStorage = require("backbone.localstorage");

module.exports.Miners = Backbone.Collection.extend({
  model: Miner,
  url: "http://localhost:1337/api/v1/miner",
//  localStorage: new Backbone.LocalStorage("miners-backbone"),
});
