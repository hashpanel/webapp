/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Sidebar = React.createClass({
  /**
   * Using Link as ListGroupItem, since react-router automatically
   * applies the 'active' class to the current Route
   */
  render: function () {
    return (
      <bs.ListGroup hover>
        <Link to='dashboard' active className='list-group-item'>
          <span className='fa fa-dashboard fa-fw' />
          Dashboard
        </Link>
        <Link to='minerlist' className='list-group-item'>
          <span className='fa fa-hdd-o fa-fw' />
          Miners
        </Link>
        <Link to='logs' className='list-group-item'>
          <span className='fa fa-list-alt fa-fw' />
          System Logs
        </Link>
        <Link to='news' className='list-group-item'>
          <span className='fa fa-rss fa-fw' />
          News
        </Link>
        <bs.ListGroupItem href='https://hashpanel.github.io/support' target='_blank'>
          <span className='fa fa-question-circle fa-fw' />
          Support
        </bs.ListGroupItem>
      </bs.ListGroup>
    );
  }
});

module.exports = Sidebar;
