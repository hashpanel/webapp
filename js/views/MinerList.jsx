/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerList = React.createClass({
  componentDidMount: function () {
    kendo.init('#create-miner-btn');
//$('#create-miner-btn').kendoButton();
  },
  renderHeader: function () {
    return (
      <div>
        Miners
        <Link to='miner'>
          <bs.Button id='create-miner-btn' bsStyle='primary' bsSize='small' data-role='button'>
            <span className='fa fa-fw fa-plus' />
            Add Miner
          </bs.Button>
        </Link>
      </div>
    );
  },
  render: function () {
    return (
      <bs.Panel header={this.renderHeader()}>
        <hashpanel.components.MinerTable collection={hashpanel.session.miners} />
      </bs.Panel>
    );
  }
});

module.exports = MinerList;
