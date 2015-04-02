var React = require('react');

var ProductComponent = React.createClass({
  makeContentShort: function() {
      var contentShort = this.props.article.content.slice(0,250) + "...";
      return contentShort;
    },
  render: function() {
    return (
        <div className="article">
          <div className="article-header-content">
            <a href="#">
              <h1>{this.props.article.title}</h1>
            </a>
            <p>{this.makeContentShort()}</p>
          </div>
          <div className="article-footer">
            <a href="#">{this.props.article.url}</a>
          </div>
        </div>
     
    );
  }
})

module.exports = ProductComponent;