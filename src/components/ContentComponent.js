var React = require('react');
var ArticleComponent = require('./ArticleComponent');


var ContentComponent = React.createClass({
  render: function() {
    var articleList = this.props.articles.map(function(article, index){
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