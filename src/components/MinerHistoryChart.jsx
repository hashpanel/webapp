/** @jsx React.DOM */

var bs = React.Bootstrap;

var MinerHistoryChart = React.createBackboneClass({
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
    this.createChart();
  },
  render: function () {
    return (
      <bs.Panel header='Hashpower Chart - last 24 hours'>
        <bs.Row>
          <bs.Col xs={12}>
            <div id='dashboard-miner-chart' style={{ height: '400px' }} />
          </bs.Col>
        </bs.Row>
      </bs.Panel>
    );
  }
});

module.exports = MinerHistoryChart;
