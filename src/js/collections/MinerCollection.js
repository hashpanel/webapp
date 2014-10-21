var Backbone = require('backbone');
var Miner = require('../Miner.js');
Backbone.LocalStorage = require("backbone.localstorage");

module.exports = Backbone.Collection.extend({
  model: Miner,
  //url: "http://localhost:1337/api/v1/miner",
  url: "http://hashware-api.herokuapp.com/api/v1/miner"
});
