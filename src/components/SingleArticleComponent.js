var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
var ArticlesStore = require('../stores/ArticlesStore');
console.log(document.location.origin);
//console.log(this.context.router.getCurrentParams()['articleId'])
var SingleArticleComponent = React.createClass({
 mixins: [Reflux.connect(ArticlesStore, 'articles')],
  
  getInitialState: function() {
    return { articles: [] };
  },
 
  render: function() {
    //console.log(window.location.href);
    //console.log(document.location.origin);
    //console.log(this.state.articles);
    var str = window.location.hash;
    //str.slice(0, 11);
    //console.log(this.context.router.getCurrentParams()['articleId'])
   //console.log(str);
    var articlesListObj = this.state.articles;
    for (var key in articlesListObj) {
      if (key==="") {return}
    }
    return (
     <div><h1>Single article</h1></div>
    );
  }
})

module.exports = SingleArticleComponent;