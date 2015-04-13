var React = require('react');
var Reflux = require('reflux');
var parseUri = require('parseUri')
var Router = require('react-router');
var Link = Router.Link;
var ArticlesStore = require('../stores/ArticlesStore');
//console.log(document.location.origin);
//console.log(this.context.router.getCurrentParams()['articleId'])
var SingleArticleComponent = React.createClass({
  articleContent:function() {
    return { __html: this.props.article.content }
  },
  shortUrl: function() {
    var host = parseUri(this.props.article.url).host;
    console.log(host);
    return host;
  },
  render: function() {
   //console.log(this.props.article)
   // console.log(this.props.article.title)
    //console.log(this.props.article.url)
    var path = parseUri(this.props.article.url).path;
    console.log(this.props.article.url)
    console.log(parseUri(this.props.article.url).host)
    console.log(path);
    return (
     <div className="">
          <div className="">
              <h1>{this.props.article.title}</h1>
              <a href={this.props.article.url}>{this.shortUrl()}</a>
              <div dangerouslySetInnerHTML={this.articleContent()} />
          </div>
        </div>
    );
  }
})

module.exports = SingleArticleComponent;