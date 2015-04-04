var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ProductComponent = React.createClass({
  makeContentShort: function() {
      var contentShort = this.props.article.content.slice(0,250) + "...";
      return contentShort;
    },
  render: function() {
    return (
        <div className="article">
          <div className="article-header-content">
            <Link to="articles">
              <h1>{this.props.article.title}</h1>
            </Link>
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