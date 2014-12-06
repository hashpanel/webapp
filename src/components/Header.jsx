/** @jsx React.DOM */

var bs = React.Bootstrap;

var Header = React.createClass({
  render: function () {
    return (
      <bs.Navbar className='header'>
        <bs.Nav>
          <bs.NavItem>
            <img src='images/hashpanel-logo-light.png' height={32}/> 
          </bs.NavItem>
          <bs.NavItem className='fa-bars fa-fw visible-xs'>
          </bs.NavItem>
        </bs.Nav>
      </bs.Navbar>
    );
  }
});

module.exports = Header;
