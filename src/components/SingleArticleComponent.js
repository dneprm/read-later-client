var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SingleArticleComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
 
  render: function() {
    return (
     <div><h1>Single article</h1></div>
    );
  }
})

module.exports = SingleArticleComponent;