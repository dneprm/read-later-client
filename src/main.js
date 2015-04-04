var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var AppComponent = require('./components/AppComponent');
var SingleArticleComponent = require('./components/SingleArticleComponent');
var ContentComponent = require('./components/ContentComponent');
var articles = require('./articles');
window.React = React;

var routes = (
  <Route name="app" path="/" handler={AppComponent}>
    <Route name="articles" path="article" handler={SingleArticleComponent}/>
    <DefaultRoute handler={ContentComponent}/>
  </Route>
  /*<Route name="toolbar" path="" handler={HeaderComponent}>
    <Route name="" handler={S}/>
    <DefaultRoute handler={}/>
  </Route>*/
);

Router.run(routes, function (Handler) {
  React.render(<Handler articles={articles}/>, document.getElementById('app'));
});

//React.render(<AppComponent articles={articles} />, document.getElementById('app'));