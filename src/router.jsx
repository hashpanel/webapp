hashpanel.views = require('./views');

var App = require('./app.jsx');
var Route = React.Router.Route;
var DefaultRoute = React.Router.DefaultRoute;
var path = window.location.pathname;

console.log('path:', path);

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='miners' handler={hashpanel.views.Miners} />
    <Route name='analysis' handler={hashpanel.views.Analysis} />
    <Route name='news' handler={hashpanel.views.News} />
    <Route name='nav' handler={hashpanel.components.Sidebar} />
    <DefaultRoute name='dashboard' handler={hashpanel.views.Dashboard} />
  </Route>
);

var router = React.Router.create({
  routes: routes,
  scrollBehavior: React.Router.ScrollToTopBehavior,
  location: React.Router.HashLocation
});

exports.start = function () {
  router.run(function (Handler) {
    React.render(<Handler />, document.body);
  });
};
