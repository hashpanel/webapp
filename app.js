var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

console.log(MinerCollection);
var Servers = new MinerCollection.Miners();
console.log(Servers);
