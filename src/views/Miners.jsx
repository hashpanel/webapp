/** @jsx React.DOM */

var bs = React.Bootstrap;

var Miners = React.createClass({
  render: function () {
    return (
      <bs.Panel header='Miners'>
        <hashpanel.components.MinerTable collection={hashpanel.session.miners} />
      </bs.Panel>
    );
  }
});

module.exports = Miners;
