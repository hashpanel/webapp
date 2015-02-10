/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Modal = React.createClass({
  render: function () {
    return (
      <bs.Modal {...this.props} title='Delete Miner' className='modal fade'>
        <div className='modal-body'>
          Are you sure you want to delete this miner?
        </div>
        <div className='modal-footer'>
          <bs.Button bsSize='small' bsStyle='danger'><span className='fa fa-remove' />Delete</bs.Button>
          <bs.Button bsSize='small' onClick={this.props.onRequestHide}>Cancel</bs.Button>
        </div>
      </bs.Modal>
    );
  }
});

module.exports = Modal;
