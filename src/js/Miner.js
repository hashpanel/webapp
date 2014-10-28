var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
   url: 'http://hashware-api.herokuapp.com/api/v1/miner',
   defaults: {
    name: {
      type: 'string',
      notNull: true
    },
    device: {
      model: 'MinerDevice'
    },
    notes: {
      type: 'text'
    },
    hashRate: {
      // declared hashrate in GH/s
      type: 'integer'
    },
    powerUsage: {
      // declared power consumption in Watts
      type: 'integer'
    },
    purchasePrice: {
      type: 'float'
    },
    monthlyFee: {
      type: 'float'
    },
    beginService: {
      type: 'date'
    },
    endService: {
      type: 'date'
    },
    host: {
      type: 'string'
    },
    port: {
      type: 'integer',
      defaultsTo: 4028
    },
    internalAddress: {
      type: 'string'
    },
    site: {
      model: 'Site',
      index: true
    },
    group: {
      model: 'Group',
      index: true
    },
    owner: {
      model: 'User',
      index: true
    },
    state: {
      model: 'MinerState'
    },
    history: {
      collection: 'MinerState',
      via: 'miner'
    },
    interval: {
      type: 'integer',
      defaultsTo: 300
    },
    worker: {
      collection: 'PoolWorker',
      via: 'miner'
    }
  }
});
