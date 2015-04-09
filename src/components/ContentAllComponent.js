var React = require('react');
var Reflux = require('reflux');
var assign = require('object-assign');
var ArticleComponent = require('./ArticleComponent');
var HeaderAllComponent = require('./HeaderAllComponent');
var ArticlesStore = require('../stores/ArticlesStore');


var ContentAllComponent = React.createClass({
  mixins: [Reflux.connect(ArticlesStore, 'articles')],
  
  getInitialState: function() {
    return {articles: ArticlesStore.getArticles()};
  },
  render: function() {
    //console.log(this.state.articles);
    
    /*var articleList = this.state.articles.map(function(article, index){
      return (<ArticleComponent article={article} key={index} />)
    }.bind(this));*/
    var arr=[];
    var dataObj = this.state.articles;
    //var idObj = {};
    
    for (var key in dataObj) {
      //idObj = {id: key}
      //var articleObj = assign({}, dataObj[key], idObj);
      arr.push(dataObj[key]);
    }
    //console.log(arr);
    var articleList = arr.map(function(article, index){
      return (<ArticleComponent article={article} key={index} />)
    }.bind(this));
   

    return (
      <div className="contentWrapper">
      <HeaderAllComponent />
        <div className="content-container">
          {articleList}
        </div>
      </div>
    );
  }
})

module.exports = ContentAllComponent;