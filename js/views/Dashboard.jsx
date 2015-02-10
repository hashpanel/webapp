/** @jsx React.DOM */

var bs = React.Bootstrap;

var Dashboard = React.createClass({
  render: function () {
    return (
      <bs.Panel header='Dashboard'>
        <hashpanel.components.WidgetGrid collection={hashpanel.session.miners} />
        <hashpanel.components.MinerHistoryChart collection={hashpanel.session.miners} />
      </bs.Panel>
    );
  }
});

module.exports = Dashboard;
