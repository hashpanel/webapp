/** @jsx React.DOM */

var bs = React.Bootstrap;

var WidgetGrid = React.createBackboneClass({
  handleRevenueResponse: function (revenue) {
    $(this.refs.revenueValue.getDOMNode()).text(revenue.toFixed(2));
  },
  render: function () {
    this.getCollection().getRevenue(moment.duration(1, 'day'))
      .then(this.handleRevenueResponse);
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
