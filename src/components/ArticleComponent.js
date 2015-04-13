var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var parseUri = require('parseUri')

//var Showdown = require('showdown');
//var converter = new Showdown.converter();



var ArticleComponent = React.createClass({
  makeContentShort: function() {
    var context = this.props.article.content;
    if (context) {
      var replaceSymbol = /<[^>]+>/g;
      context = context.replace(replaceSymbol, "");
      var shortBody = context.substr(0,250)+"...";
      return shortBody;
    } 

    //return shortBody;
   /* var contentShort = this.props.article.content.slice(0,250) + "...";
      return contentShort;*/
    },
  /*articleContent:function() {
    return { __html: this.props.article.content }
  },*/
  shortUrl: function() {
    var host = parseUri(this.props.article.url).host;
    return host;
  },
  render: function() {
   //console.log(this.props.article.url.trim());
    return (
        <div className="article">
          <div className="article-header-content">
            <Link to="article" params={{articleId: this.props.article.id}}>
              <h1>{this.props.article.title}</h1>
            </Link>
            <div>{this.makeContentShort()}</div>
          </div>
          <div className="article-footer">
            <a href={this.props.article.url}>{this.shortUrl()}</a>
          </div>
        </div>
    );
  }
})


module.exports = ArticleComponent;