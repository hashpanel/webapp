/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Miner = React.createBackboneClass({
  handleSave: function (event) {
    this.refs.form.save();
  },
  renderFooter: function () {
    return (
      <bs.ButtonToolbar>
        <bs.Button bsStyle='primary' onClick={this.handleSave}><span className='fa fa-check' />Save</bs.Button>
        <bs.ModalTrigger modal={<hashpanel.components.MinerDeleteConfirmationModal />}>
          <bs.Button bsStyle='danger'><span className='fa fa-remove' />Delete</bs.Button>
        </bs.ModalTrigger>
      </bs.ButtonToolbar>
    );
  },
  renderHeader: function () {
    return (
      <bs.ButtonToolbar>
        Create/Edit Miner
        <Link to='minerlist'>
          <bs.Button bsSize='small' className='back-btn'><span className='fa fa-arrow-left' />Back</bs.Button>
        </Link>
      </bs.ButtonToolbar>
    );
  },
  render: function () {
    return (
      <bs.Panel header={this.renderHeader()} footer={this.renderFooter()}>
        <hashpanel.components.MinerForm ref='form' />
      </bs.Panel>
    );
  }
});

module.exports = Miner;
