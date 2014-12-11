/** @jsx React.DOM */

var bs = React.Bootstrap;

var Miners = React.createClass({
  renderHeader: function () {
    return (
      <div>
        Miners
        <bs.Button id='create-miner-btn' bsStyle='primary' bsSize='small'>
          <span className='fa fa-fw fa-plus' />Add Miner
        </bs.Button>
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

module.exports = Miners;
