var React = require('react');

var SearchComponent = React.createClass({
  render: function() {
    return (
      <div className="search">
        <input type="search" placeholder="Search"></input>
      </div>
    );
  }
})

module.exports = SearchComponent;