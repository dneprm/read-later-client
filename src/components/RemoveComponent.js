var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Actions = require('../actions/FirebaseActions');

var RemoveComponent = React.createClass({
  removeArticle: function(event) {
    event.preventDefault();
    //console.log("hello")
    var value = this.context.router.getCurrentParams()['articleId'];
    Actions.removeArticle(value);
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    //console.log("hey")
    //console.log(window.location)
    //console.log(this.context.router.getCurrentParams()['articleId'])
    return (
      <div className="showAll">
      
       <div onClick={this.removeArticle}> <Link to="app" > Remove</Link></div>
      </div>
    );
  }
})

module.exports = RemoveComponent;