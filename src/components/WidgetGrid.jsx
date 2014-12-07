/** @jsx React.DOM */

var bs = React.Bootstrap;

var WidgetGrid = React.createClass({
  render: function () {
    return (
      <bs.Row>
        <bs.Col sm={4}>
          <bs.Well className='bg-purple fg-white'>
            <h2>9.7 TH/s</h2>
            <h5>Current Hashrate</h5>
          </bs.Well>
        </bs.Col>
        <bs.Col collapseLeft sm={4}>
          <bs.Well className='bg-blue fg-white'>
            <h2>100%</h2>
            <h6>Miner Availability</h6>
          </bs.Well>
        </bs.Col>
        <bs.Col collapseLeft collapseRight sm={4}>
          <bs.Well className='bg-bitcoinorange fg-white'>
            <h2><i className='fa fa-btc' style={{marginRight: 4}} />0.19</h2>
            <h5>Daily BTC Revenue</h5>
          </bs.Well>
        </bs.Col>
      </bs.Row>
    );
  }
});

module.exports = WidgetGrid;
