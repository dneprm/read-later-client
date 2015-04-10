var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions/FirebaseActions');
var ArticlesStore = require('../stores/ArticlesStore');


var MarkAsReadComponent = React.createClass({
  mixins: [Reflux.connect(ArticlesStore)],
  getInitialState: function() {
    return { article: ArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId']) };
  },
  changeArticleReadState: function(event) {
    event.preventDefault();
    //console.log("hello")
    var newValue = this.state.article;
    newValue.readState = !this.state.article.readState;
    for (var key in newValue) {
      if (key==="id") {
        delete newValue[key];
      }
    }
    var id = this.context.router.getCurrentParams()['articleId'];
    //console.log(id);
    //console.log(newValue);
    Actions.updateArticle(id, newValue);
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    //console.log(this.state.article);
    var readState = this.state.article.readState  ? 'Mark as unread' : 'Mark as read';
    return (
      <div className="showAll">
         <a href="#" onClick={this.changeArticleReadState} >{readState}</a>
      </div>
    );
  }
})

module.exports = MarkAsReadComponent;