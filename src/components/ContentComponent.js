var React = require('react');
var Reflux = require('reflux');
var ArticleComponent = require('./ArticleComponent');
var ArticlesStore = require('../stores/ArticlesStore');


var ContentComponent = React.createClass({
  mixins: [Reflux.connect(ArticlesStore, 'articles')],
  
  getInitialState: function() {
    return { articles: [] };
  },
  render: function() {
    console.log(this.state.articles);
    var articleList = this.state.articles.map(function(article, index){
      return (<ArticleComponent article={article} key={index} />)
    }.bind(this));

    return (
      <div className="contentWrapper">
        <div className="content-container">
          {articleList}
        </div>
      </div>
    );
  }
})

module.exports = ContentComponent;