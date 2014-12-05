/** @jsx React.DOM */

var bs = React.Bootstrap;
var RouteHandler = React.Router.RouteHandler;
var Header = hashpanel.components.Header;
var Sidebar = hashpanel.components.Sidebar;

var App = React.createClass({
  render: function () {
    return (
      <div id='app'>
        <bs.Grid>
          <bs.Row>
            <bs.Col>
              <Header />
            </bs.Col>
          </bs.Row>
          <bs.Row>
            <bs.Col md={3} sm={4} className='hidden-xs'>
              <Sidebar />
            </bs.Col>
            <bs.Col md={9}>
              <RouteHandler />
            </bs.Col>
          </bs.Row>
        </bs.Grid>
      </div>
    );
  }
});

module.exports = App;
