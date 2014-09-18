var Backbone = require('backbone');

module.exports.Miner = Backbone.Model.extend({
   defaults: {
        'name': 'John Doe',
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
