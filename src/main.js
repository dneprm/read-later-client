var React = require('react');

var AppComponent = require('./components/AppComponent');
var articles = require('./articles');
window.React = React;


React.render(<AppComponent articles={articles} />, document.getElementById('app'));