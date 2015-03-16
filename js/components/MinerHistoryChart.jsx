/** @jsx React.DOM */

var bs = React.Bootstrap;
hashpanel.session.charts.minerHistory = { };

var MinerHistoryChart = React.createBackboneClass({
  getInitialState: function () {
    return {
      chart: {
        parameters: {
          end: Date.now(),
          begin: Date.now() - (86400 * 1000),  // one day ago
          resolution: 10 // minutes
        }
      }
    };
  },
  createChart: function () {
    this.props.chart = nv.models.stackedAreaChart()
      .useInteractiveGuideline(true)
      .showControls(false)
      .clipEdge(true)
      .x(function (d) {
        return new Date(d.x);
      })
      .y(function (d) {
        return d.y / 1e3;
      });

    this.props.chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { 
        return d3.time.format('%I:%M%p')(new Date(d));
      });

    this.props.svg = d3.select('#dashboard-miner-chart svg');
    this.props.svg.selectAll('axis').attr('class', 'd3-axis');

    nv.utils.windowResize(this.props.chart.update);

    return this.props.chart;
  },
  componentDidUpdate: function () {
    var i = 0;
    var data = _.map(hashpanel.session.charts.minerHistory, function (data, name) {
      i++;
      return {
        key: name,
        color: require('../../lib/util').getBootstrapColor(i),
        values: data
      };
    });
    if (this.props.svg) {
      this.props.svg.datum(data).call(this.props.chart);
    }
  },
  getChartData: function () {
    var params = this.state.chart.parameters;
    this.getCollection().each(function (miner) {
      miner.getChartData(params).then(function (data) {
        hashpanel.session.charts.minerHistory[miner.get('name')] = data;
        this.forceUpdate();
      }.bind(this));
    }, this);
  },
  componentDidMount: function () {
    nv.addGraph(this.createChart);
    this.getCollection().fetch({
      data: {
        populate: [ 'state', 'device', 'workers' ]
      }
    });
    this.getCollection().on('sync', function () {
      this.getChartData();
    }, this);
  },
  render: function () {
    return (
      <bs.Panel header='Hashpower Chart - last 24 hours (GH/s)'>
        <bs.Row>
          <bs.Col xs={12}>
            <div id='dashboard-miner-chart' style={{ height: '400px' }} >
              <svg></svg>
            </div>
          </bs.Col>
        </bs.Row>
      </bs.Panel>
    );
  }
});

module.exports = MinerHistoryChart;
