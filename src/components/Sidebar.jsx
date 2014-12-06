/** @jsx React.DOM */

var bs = React.Bootstrap;

var Sidebar = React.createClass({
  render: function () {
    return (
      <bs.ListGroup>
        <bs.ListGroupItem href='/' active>
          <bs.Glyphicon className='fa-dashboard fa-fw' />
          Dashboard
        </bs.ListGroupItem>
        <bs.ListGroupItem href='/miners'>
          <bs.Glyphicon className='fa-hdd-o fa-fw' />
          Miners
        </bs.ListGroupItem>
        <bs.ListGroupItem href='/analysis'>
          <bs.Glyphicon className='fa-line-chart fa-fw' />
          Analysis
        </bs.ListGroupItem>
        <bs.ListGroupItem href='/news'>
          <bs.Glyphicon className='fa-newspaper-o fa-fw' />
          News
        </bs.ListGroupItem>
      </bs.ListGroup>
    );
  }
});

module.exports = Sidebar;
