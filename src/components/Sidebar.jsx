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
          <span className='fa-dashboard fa-fw' />
          Dashboard
        </Link>
        <Link to='minerlist' className='list-group-item'>
          <span className='fa-hdd-o fa-fw' />
          Miners
        </Link>
        <Link to='analysis' className='list-group-item'>
          <span className='fa-line-chart fa-fw' />
          Analysis
        </Link>
        <Link to='news' className='list-group-item'>
          <span className='fa-newspaper-o fa-fw' />
          News
        </Link>
      </bs.ListGroup>
    );
  }
});

module.exports = Sidebar;
