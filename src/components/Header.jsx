/** @jsx React.DOM */

var bs = React.Bootstrap;

var Header = React.createClass({
  render: function () {
    return (
      <bs.Navbar className='header'>
        <bs.Nav>
          <bs.NavItem>
            <img src='images/hashpanel-logo-light.png' /> 
          </bs.NavItem>
        </bs.Nav>
      </bs.Navbar>
    );
  }
});

module.exports = Header;
