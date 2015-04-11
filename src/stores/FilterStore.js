var Reflux = require('reflux');

var FilterActions = require('../actions/FilterActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,
  init: function() {
    this.filter= {viewState: "unread", searchState: ""};
  },
  changeViewAllState: function(state) {
    //console.log(this.filter.viewState)
    if (state==="unread") {
      this.filter.viewState = "all";
    } else if (state==="all") {
      this.filter.viewState = "unread";
    }
    //console.log(this.filter.viewState)
    //console.log(this.filter)
    this.trigger(this.filter);
  },
  changeSearchState:  function(value) {
    //console.log(value);
    this.filter.searchState = value;
    this.trigger(this.filter);
  },
  getFilterState: function() {
   return this.filter;
  }
});

module.exports = FilterStore;

