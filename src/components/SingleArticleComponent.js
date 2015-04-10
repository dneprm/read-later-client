var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
var ArticlesStore = require('../stores/ArticlesStore');
//console.log(document.location.origin);
//console.log(this.context.router.getCurrentParams()['articleId'])
var SingleArticleComponent = React.createClass({
 
  /*articleContent:function() {
    return { __html: this.props.article.content ? this.props.article.content: "" }
  },*/
  articleContent:function() {
    return { __html: this.props.article.content }
  },
  render: function() {
   //console.log(this.props.article)
    console.log(this.props.article.title)
    return (
     <div className="">
          <div className="">
              <h1>{this.props.article.title}</h1>
              <a href="#">{this.props.article.url}</a>
              <div dangerouslySetInnerHTML={this.articleContent()} />
          </div>
        </div>
    );
  }
})

module.exports = SingleArticleComponent;