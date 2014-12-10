/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <bs.Navbar className='header'>
        <bs.Nav>
          <bs.NavItem>
            <img id='logo-image' src='images/hashpanel-logo-light.png' /> 
          </bs.NavItem>
          <Link to='nav'>
            <bs.NavItem className='fa-bars fa-fw visible-xs'>
            </bs.NavItem>
          </Link>
        </bs.Nav>
      </bs.Navbar>
    );
  }
});

module.exports = Header;
