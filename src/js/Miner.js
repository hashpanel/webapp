var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
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
