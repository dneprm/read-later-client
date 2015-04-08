var React = require('react');
var Reflux = require('reflux');
var assign = require('object-assign');
var HeaderOneComponent = require('./HeaderOneComponent');
var SingleArticleComponent = require('./SingleArticleComponent');
var ArticlesStore = require('../stores/ArticlesStore');


var ContentOneComponent = React.createClass({
  mixins: [Reflux.connect(ArticlesStore, 'articles')],
  
  getInitialState: function() {
    return { articles: [] };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    //console.log(this.context.router.getCurrentParams()['articleId']);
    console.log(this.state.articles)
    return (
      <div className="contentWrapper">
      <HeaderOneComponent />
        <div className="content-container">
          <SingleArticleComponent />
        </div>
      </div>
    );
  }
})

module.exports = ContentOneComponent;