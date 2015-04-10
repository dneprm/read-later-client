var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions/FilterActions');
var FilterStore = require('../stores/FilterStore');

var ShowAllComponent = React.createClass({
  mixins: [Reflux.connect(FilterStore)],
  getInitialState: function() {
    return { filter: FilterStore.getFilterState() };
  },
  changeArticlesView: function(event) {
    event.preventDefault();
    var value = this.state.filter.viewState;
    Actions.changeViewAllState(value);
  },
  render: function() {
   // console.log(this.state.filter);
    var articlesView = this.state.filter.viewState==="all"  ? 'Show "unread" only':'Show all' ;
    return (
      <div className="showAll">
         <a href="#" onClick={this.changeArticlesView}>{articlesView}</a>
      </div>
    );
  }
})

module.exports = ShowAllComponent;