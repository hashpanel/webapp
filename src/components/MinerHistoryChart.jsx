/** @jsx React.DOM */

var bs = React.Bootstrap;

var MinerHistoryChart = React.createBackboneClass({
  getInitialState: function () {
    return {
      chart: {
        parameters: {
          end: Date.now(),
          begin: Date.now() - (86400 * 1000),  // one day ago
          resolution: 15 // minutes
        },
        data: { }
      }
    };
  },
  createChart: function () {
    this.props.chart = nv.models.stackedAreaChart()
      .useInteractiveGuideline(true)
      .transitionDuration(250)
      .showControls(false)
      .clipEdge(true)
      .x(function (d) {
        return new Date(d.x);
      });


    this.props.chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { 
        return d3.time.format('%I:%M%p')(new Date(d));
      });

    this.props.chart.yAxis
      .tickFormat(d3.format(',.2f'));

    this.props.svg = d3.select('#dashboard-miner-chart svg');

    nv.utils.windowResize(this.props.chart.update);

    return this.props.chart;
  },
  componentDidUpdate: function () {
    console.log('componentDidUpdate');
    var data = _.map(this.state.chart.data, function (data, name) {
      return {
        key: name,
        values: data
      };
    });
    console.log(data);
    this.props.svg.datum(data).call(this.props.chart);
  },
  onModelChange: function () {
    var params = this.state.chart.parameters;
    var chart = this.state.chart;
    this.getCollection().each(function (miner) {
      miner.getChartData(params).then(function (data) {
        chart.data[miner.get('name')] = data;
        this.setState({ chart: chart });
      }.bind(this));
    }, this);
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    nv.addGraph(this.createChart);
  },
  render: function () {
    return (
      <bs.Panel header='Hashpower Chart - last 24 hours'>
        <bs.Row>
          <bs.Col xs={12}>
            <div id='dashboard-miner-chart' style={{ height: '300px' }} >
              <svg></svg>
            </div>
          </bs.Col>
        </bs.Row>
      </bs.Panel>
    );
  }
});

module.exports = MinerHistoryChart;
