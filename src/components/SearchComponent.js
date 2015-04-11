var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions/FilterActions');
var FilterStore = require('../stores/FilterStore');

var SearchComponent = React.createClass({
  mixins: [Reflux.connect(FilterStore)],
  getInitialState: function() {
    return { filter: FilterStore.getFilterState() };
  },
  changeArticlesView: function(event) {
    event.preventDefault();
    var value = this.refs.search.getDOMNode().value.trim();
    //this.refs.search.getDOMNode().value = '';
    //console.log(value);
    Actions.changeSearchState(value);
  },
  render: function() {
   // console.log(this.state.filter);
    return (
      <div className="search">
        <input type="text" placeholder="Search" ref="search" onChange={this.changeArticlesView}></input>
      </div>
    );
  }
})

module.exports = SearchComponent;