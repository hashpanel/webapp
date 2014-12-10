/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerRow = React.createBackboneClass({
  render: function () {
    return (
      <tr>
        <td>{this.getModel().get('name')}</td>
        <td>{this.getModel().getCurrentHashrate()}</td>
        <td>{this.getModel().get('device').get('name')}</td>
        <td>{this.getModel().get('state').toString()}</td>
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
      <bs.Table>
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
