/** @jsx React.DOM */

var bs = React.Bootstrap;

var Dashboard = React.createClass({
  render: function () {
    return (
      <bs.Panel header='Dashboard'>
        <hashpanel.components.WidgetGrid />
        <hashpanel.components.MinerHistoryChart />
      </bs.Panel>
    );
  }
});

module.exports = Dashboard;
