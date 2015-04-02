var React = require('react');

var ReadNowComponent = React.createClass({
  render: function() {
    return (
      <div className="readNowWrapper">
          <h1>
            <a href="#">Read Now</a>
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