var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Miner = require('./src/js/Miner.js');

console.log(Miner);
var person = Backbone.Collection.extend({
  model: Miner
});
