/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerRow = React.createBackboneClass({
  stateLabelStyle: function () {
    if (this.getModel().get('state').get('success')) {
      return 'success';
    }
    else {
      return 'danger';
    }
  },
  hashrateColumnStyle: function () {
    var ratio = this.getModel().getPerformanceRatio();
    if (ratio > 0.80) {
      return 'success';
    }
    else if (ratio > 0.55) {
      return 'warning';
    }
    else {
      return 'danger';
    }
  },
  renderHashratePopover: function () {
    var name = this.getModel().get('name');
    var percentage = this.getModel().getPerformancePercentageString();   
    var rated = this.getModel().get('device').get('hashRate');
    var declared = this.getModel().getDeclaredHashrateString();

    return (
      <bs.Popover title='Miner Hashrate Details'>
        <b>{name}</b> is operating at <b>{percentage}</b> efficiency. You declared the
        hashrate of this device to be {declared}. The manufacturer rates this
        device at {declared}. Efficiency is computed by dividing the current
        hashrate by the declared hashrate.
      </bs.Popover>
    );
  },
  renderStatusPopover: function () {
    var name = this.getModel().get('name');
    var state = this.getModel().get('state');
    var nascentMsg = 'The miner seems to have been recently added. Waiting for data.';
    var errorMsg = 'This means that the miner reported an error recently, or that we cannot contact it.';
    var tempMsg = 'This means that the miner has a higher temperature than its manufacturer recommends';
    var okMsg = 'This means that everything is looking good.';
    var actualMsg = '';
    if (!state) {
      actualMsg = nascentMsg;
      this.getModel().state = new hashpanel.api.MinerState({
        success: true
      });
    }
    /*
    if (state.getTemperatureStatus()) {

    }
    */
    else if (state.get('success')) {
      actualMsg = okMsg;
    }
    else {
      actualMsg = errorMsg;
    }
    return (
      <bs.Popover title='Miner Status Details'>
        <b>{name}</b> is reporting a status of '{state.toString()}'. {actualMsg}
      </bs.Popover>
    );
  },
  render: function () {
    return (
      <tr>
        <td>{this.getModel().get('name')}</td>
        <bs.OverlayTrigger placement='bottom' trigger='click' overlay={this.renderHashratePopover()}>
          <td>
            <bs.Button bsSize='small' bsStyle={this.hashrateColumnStyle()}>
              {this.getModel().getCurrentHashrateString()}
            </bs.Button>
          </td>
        </bs.OverlayTrigger>
        <td>{this.getModel().getDeviceString()}</td>
        <td>
          <bs.OverlayTrigger placement='bottom' trigger='click' overlay={this.renderStatusPopover()}>
            <bs.Button bsSize='small' bsStyle={this.stateLabelStyle()}>{this.getModel().get('state').toString()}</bs.Button>
          </bs.OverlayTrigger>
        </td>
      </tr>
    );  
  }

});

var MinerTable = React.createBackboneClass({
  render: function () {
    var minerRows = this.getCollection().map(function (miner) {
      return (
        <MinerRow model={miner} />
      );  
    });
    return (
      <bs.Table striped hover className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hashrate</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {minerRows}
        </tbody>
      </bs.Table>
    );  
  }
});

module.exports = MinerTable;
