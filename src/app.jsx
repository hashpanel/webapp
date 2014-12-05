/** @jsx React.DOM */

var RouteHandler = React.Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div id='app'>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
