var React = require('react');
//var Reflux = require('reflux');
var HeaderComponent = require('./HeaderComponent');
var ContentComponent = require('./ContentComponent');
var FooterComponent = require('./FooterComponent');


var AppComponent = React.createClass({
  render: function() {
    return (
      <div className="app">
        <HeaderComponent />
        <ContentComponent articles={this.props.articles} />
        <FooterComponent />
      </div>
    );
  }
})

module.exports = AppComponent;