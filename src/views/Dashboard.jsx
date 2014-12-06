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

var DashboardMinerChart = React.createClass({
  createChart: function () {
    var data = this.getCollection().getHashchartData();
    var chart = nv.models.stackedAreaChart()
      .useInteractiveGuideline(true)
      .transitionDuration(250)
      .showControls(false)
      .clipEdge(true);

    chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { 
        return d3.time.format('%I:%M%p')(new Date(d));
      });

    chart.yAxis
      .tickFormat(d3.format(',.2f'));

    d3.select('#dashboard-miner-chart')
      .append('svg')
      .datum(data)
      .transition().duration(1000)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  },
  componentDidMount: function () {
    console.log('DashboardMinerChart componentDidMount');
    this.createChart();
  },
  render: function () {
    return (
      <bs.PanelContainer noControls>
        <bs.Panel>
          <bs.PanelHeader className='bg-sidebartext fg-white'>
            <bs.Row>
              <bs.Col xs={12} className='fg-white'>
                <h4>Hashpower Chart - last 24 hours</h4>
              </bs.Col>
            </bs.Row>
          </bs.PanelHeader>
          <bs.PanelBody>
            <bs.Row>
              <bs.Col xs={12}>
                <div id='dashboard-miner-chart' style={{ height: '400px' }} />
              </bs.Col>
            </bs.Row>
          </bs.PanelBody>
        </bs.Panel>
      </bs.PanelContainer>
    );
  }
});

var Dashboard = React.createClass({
  render: function () {
    return (
      <bs.Panel header='Dashboard'>
        <WidgetGrid />
      </bs.Panel>
    );
  }
});

module.exports = Dashboard;
