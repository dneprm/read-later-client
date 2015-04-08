var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var AppComponent = require('./components/AppComponent');
var ContentOneComponent = require('./components/ContentOneComponent');
var ContentAllComponent = require('./components/ContentAllComponent');
window.React = React;

var routes = (
  <Route name="app" path="/" handler={AppComponent}>
    <Route name="article" path="/articles/:articleId" handler={ContentOneComponent}/>
    <Route name="articles" path="/articles" handler={ContentAllComponent}/>
    <DefaultRoute handler={ContentAllComponent}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

