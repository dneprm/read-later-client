var React = require('react');

var FooterComponent = React.createClass({
  render: function() {
    return (
      <div className="footerWrapper">
        <div className="footer-container">
          <span>Bookmarket</span>
          <a href="#" > + Read later</a>
        </div>
      </div>
    );
  }
})

module.exports = FooterComponent;