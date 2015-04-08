var React = require('react');
var ReadNowComponent = require('./ReadNowComponent');
var RemoveComponent = require('./RemoveComponent');
var MarkAsReadComponent = require('./MarkAsReadComponent');


var HeaderOneComponent = React.createClass({
  render: function() {
    return (
      <div className="headerWrapper">
        <div className="header-container">
          <ReadNowComponent />
          <RemoveComponent />
          <MarkAsReadComponent />
        </div>
      </div>
    );
  }
})

module.exports = HeaderOneComponent;