var React = require('react');
var Reflux = require('reflux');
var assign = require('object-assign');
var HeaderOneComponent = require('./HeaderOneComponent');
var SingleArticleComponent = require('./SingleArticleComponent');
var ArticlesStore = require('../stores/ArticlesStore');


var ContentOneComponent = React.createClass({
  mixins: [Reflux.connect(ArticlesStore, 'article')],
  
  getInitialState: function() {
    return { article: ArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId']) };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    //console.log(this.state.article)
    //console.log(a);
    return (
      <div className="contentWrapper">
      <HeaderOneComponent article={this.state.article}/>
        <div className="content-container">
          <SingleArticleComponent article={this.state.article} />
        </div>
      </div>
    );
  }
})

module.exports = ContentOneComponent;