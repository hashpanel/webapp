/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Sidebar = React.createClass({
  render: function () {
    return (
      <bs.ListGroup>
        <Link to='dashboard'>
          <bs.ListGroupItem active>
            <span className='fa-dashboard fa-fw' />
            Dashboard
          </bs.ListGroupItem>
        </Link>
        <Link to='miners'>
          <bs.ListGroupItem>
            <span className='fa-hdd-o fa-fw' />
            Miners
          </bs.ListGroupItem>
        </Link>
        <Link to='analysis'>
          <bs.ListGroupItem>
            <span className='fa-line-chart fa-fw' />
            Analysis
          </bs.ListGroupItem>
        </Link>
        <Link to='news'>
          <bs.ListGroupItem>
            <span className='fa-newspaper-o fa-fw' />
            News
          </bs.ListGroupItem>
        </Link>
      </bs.ListGroup>
    );
  }
});

module.exports = Sidebar;
