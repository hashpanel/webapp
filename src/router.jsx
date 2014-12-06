global.React.Router = require('react-router');
hashpanel.views = require('./views');

var App = require('./app.jsx');
var Route = React.Router.Route;
var DefaultRoute = React.Router.DefaultRoute;

var routes = (
  <Route name='app' path={window.location.pathname} handler={App}>
    
    <DefaultRoute name='dashboard' handler={hashpanel.views.Dashboard} />
  </Route>
);

exports.start = function () {
  React.Router.run(routes, React.Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.body);
  });
};
