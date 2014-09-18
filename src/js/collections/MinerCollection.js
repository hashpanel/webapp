var Backbone = require('backbone');
var Miner = require('../Miner.js');
Backbone.LocalStorage = require("backbone.localstorage");

module.exports.Miners = Backbone.Collection.extend({
  model: Miner,
  localStorage: new Backbone.LocalStorage("miners-backbone"),
});
