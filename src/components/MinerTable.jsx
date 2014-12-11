/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerRow = React.createBackboneClass({
  stateLabelStyle: function () {
    if (this.getModel().get('state').get('success')) {
      return 'label-success';
    }
    else {
      return 'label-danger';
    }
  },
  hashrateColumnStyle: function () {
    var ratio = this.getModel().getPerformanceRatio();
    if (ratio > 0.80) {
      return '';
    }
    else if (ratio > 0.55) {
      return 'btn-warning';
    }
    else {
      return 'btn-danger';
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
    var errorMsg = "This means that the miner reported an error recently, or that we cannot contact it.";
    var tempMsg = "This means that the miner has a higher temperature than its manufacturer recommends";
    var okMsg = "This means that everything is looking good.";
    var actualMsg = '';
    /*
    if (state.getTemperatureStatus()) {

    }
    */
    if (state.get('success')) {
      actualMsg = okMsg;
    }
    else {
      actualMsg = errorMsg;
    }
    return (
      <bs.Popover title='Miner Status Details'>
        <b>{name}</b> is reporting a status of "{state.toString()}". {actualMsg}
      </bs.Popover>
    );
  },
  render: function () {
    return (
      <tr>
        <td>{this.getModel().get('name')}</td>
        <bs.OverlayTrigger placement='bottom' trigger='click' overlay={this.renderHashratePopover()}>
          <td>
            <bs.Button bsSize='small' className={this.hashrateColumnStyle()}>
              {this.getModel().getCurrentHashrateString()}
            </bs.Button>
          </td>
        </bs.OverlayTrigger>
        <td>{this.getModel().getDeviceString()}</td>
        <td>
          <bs.OverlayTrigger placement='bottom' trigger='click' overlay={this.renderStatusPopover()}>
            <bs.Label className={this.stateLabelStyle()}>{this.getModel().get('state').toString()}</bs.Label>
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
