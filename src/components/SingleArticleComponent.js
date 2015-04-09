var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
var ArticlesStore = require('../stores/ArticlesStore');
//console.log(document.location.origin);
//console.log(this.context.router.getCurrentParams()['articleId'])
var SingleArticleComponent = React.createClass({
  showContent: function() {
    var context = this.props.article.content;
    var replaceSymbol = /<[^>]+>/g;
    context = context.replace(replaceSymbol, "");
    return context;
    /*var contentShort = this.props.article.content.slice(0,250) + "...";
      return contentShort;*/
    },
  render: function() {
   // console.log(this.props.article)
    
    return (
     <div className="">
          <div className="">
              <h1>{this.props.article.title}</h1>
              <a href="#">{this.props.article.url}</a>
              <div> {this.showContent()}</div>
          </div>
        </div>
    );
  }
})

module.exports = SingleArticleComponent;