var React = require('react');
//var Reflux = require('reflux');
var HeaderComponent = require('./HeaderComponent');
//var ContentComponent = require('./ContentComponent');
var FooterComponent = require('./FooterComponent');

var ArticlesStore = require('../stores/ArticlesStore');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
//articles={this.props.articles}

var AppComponent = React.createClass({
  
  render: function() {
    return (
      <div className="app">
        <HeaderComponent />
        <RouteHandler  />
        <FooterComponent />
      </div>
    );
  }
})

module.exports = AppComponent;