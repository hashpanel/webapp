/** @jsx React.DOM */

var bs = React.Bootstrap;
var RouteHandler = React.Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div id='app'>
        <bs.Grid>
          <bs.Row>
            <bs.Col sm={3} md={2} className='hidden-xs'>
              <hashpanel.components.UserWidget model={hashpanel.session.user} />
            </bs.Col>
            <bs.Col sm={9} md={10}>
              <hashpanel.components.Header />
            </bs.Col>
          </bs.Row>
          <bs.Row>
            <bs.Col sm={3} md={2} className='hidden-xs'>
              <hashpanel.components.Sidebar />
            </bs.Col>
            <bs.Col sm={9} md={10}>
              <RouteHandler />
            </bs.Col>
          </bs.Row>
        </bs.Grid>
      </div>
    );
  }
});

module.exports = App;
