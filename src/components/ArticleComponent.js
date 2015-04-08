var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ArticleComponent = React.createClass({
  makeContentShort: function() {
      var contentShort = this.props.article.content.slice(0,250) + "...";
      return contentShort;
    },
  render: function() {
   //console.log(this.props.article);
    return (
        <div className="article">
          <div className="article-header-content">
            <Link to="article" params={{articleId: this.props.article.id}}>
              <h1>{this.props.article.title}</h1>
            </Link>
            {this.props.article.content}
          </div>
          <div className="article-footer">
            <a href="#">{this.props.article.url}</a>
          </div>
        </div>
    );
  }
})


module.exports = ArticleComponent;