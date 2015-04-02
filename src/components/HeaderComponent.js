var React = require('react');
var ReadNowComponent = require('./ReadNowComponent');
var ShowAllComponent = require('./ShowAllComponent');
var SearchComponent = require('./SearchComponent');


var HeaderComponent = React.createClass({
  render: function() {
    return (
      <div className="headerWrapper">
        <div className="header-container">
          <ReadNowComponent />
          <ShowAllComponent />
          <SearchComponent />
        </div>
      </div>
    );
  }
})

module.exports = HeaderComponent;