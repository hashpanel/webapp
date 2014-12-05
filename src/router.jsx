global.React.Router = require('react-router');
hashpanel.views = require('./views');

var App = require('./app.jsx');
var Route = React.Router.Route;
var DefaultRoute = React.Router.DefaultRoute;

var routes = (
  <Route name='app' path='/' handler={App}>
    
  </Route>
);
//<DefaultRoute handler={hashpanel.views.Dashboard} />

React.Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
