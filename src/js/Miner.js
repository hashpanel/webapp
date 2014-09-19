var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
   urlRoot: '/miner',
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
