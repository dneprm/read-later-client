var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Actions = require('../actions/ArticleActions');

var ReadNowComponent = React.createClass({
  addUrl: function(event) {
    event.preventDefault();
    //console.log("hello")
    var value = this.refs.url.getDOMNode().value.trim();
    this.refs.url.getDOMNode().value = '';
    Actions.addUrl(value);
  },
  render: function() {
    return (
      <div className="readNowWrapper">
          <h1>
            <Link to="app">Read Now</Link>
          </h1>
          <div className="addUrl">
            <form onSubmit={this.addUrl}>
              <input type="text" placeholder="http://..." ref="url"></input>
              <input type="submit" value="+ ADD URL" ></input>
            </form>
          </div>
      </div>
    );
  }
})

module.exports = ReadNowComponent;