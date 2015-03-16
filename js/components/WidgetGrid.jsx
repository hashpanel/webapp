/** @jsx React.DOM */

var bs = React.Bootstrap;
hashpanel.session.widgets.hashrate = 0;
hashpanel.session.widgets.availability = 0;
hashpanel.session.widgets.revenue = 0;

var WidgetGrid = React.createBackboneClass({
  handleRevenueResponse: function (revenue) {
    hashpanel.session.widgets.revenue = revenue;
    this.forceUpdate();
  },
  componentDidUpdate: function () {
    $(this.refs.revenueValue.getDOMNode()).text(hashpanel.session.widgets.revenue.toFixed(7));
  },
  componentDidMount: function () {
    if (hashpanel.session.widgets.revenue) {
      this.forceUpdate();
    }
    this.getCollection().getRevenue(moment.duration(1, 'days'))
      .then(this.handleRevenueResponse);
  },
  render: function () {
    var hashrate = this.getCollection().getCurrentHashrateString();
    var availability = this.getCollection().getAvailabilityString();
    return (
      <bs.Row className='widgetgrid'>
        <bs.Col sm={4}>
          <bs.Well>
            <h4>{hashrate}</h4>
            <h6>Current Hashrate</h6>
          </bs.Well>
        </bs.Col>
        <bs.Col sm={4}>
          <bs.Well>
            <h4>{availability}</h4>
            <h6>Miner Availability</h6>
          </bs.Well>
        </bs.Col>
        <bs.Col sm={4}>
          <bs.Well>
            <h4>
              <span className='fa fa-btc fa-fw' />
              <span ref='revenueValue' />
            </h4>
              <h6>Daily Revenue</h6>
          </bs.Well>
        </bs.Col>
      </bs.Row>
    );
  }
});

module.exports = WidgetGrid;
