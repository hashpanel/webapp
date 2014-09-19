var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
/**
Miners
**/
var Miner = require('./src/js/Miner.js');
var MinerCollection = require('./src/js/collections/MinerCollection.js');
var MinerView = require('./src/js/views/MinerView.js');

var a =  new Miner ({'name':'venus','group':'solar','hashRate':'6 G/HS','powerUsage': 6});
var aView = new MinerView({model:a});
//var Servers = new MinerCollection.Miners();
console.log(MinerCollection);


 $("#miners").append(aView.render().el);
