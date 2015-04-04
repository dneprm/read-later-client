var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ReadNowComponent = React.createClass({
  render: function() {
    return (
      <div className="readNowWrapper">
          <h1>
            <Link to="app">Read Now</Link>
          </h1>
          <div className="addUrl">
            <form>
              <input type="text" placeholder="http://..."></input>
              <input type="submit" value="+ ADD URL"></input>
            </form>
          </div>
      </div>
    );
  }
})

module.exports = ReadNowComponent;