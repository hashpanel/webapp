var Backbone = require('backbone');

module.exports.Miner = Backbone.Model.extend({
   urlRoot: '/miner',
   tagName: "tr",
   defaults: {
        'name': '',
        'model': '',
        'hashRate': '',
        'powerUsage': '',
        'purchasePrice': '',
        'beginService': '',
        'endService': '',
        'connection': '',
        'site': '',
        'group': ''
  }
});
