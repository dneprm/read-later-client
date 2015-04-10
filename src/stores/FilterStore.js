var Reflux = require('reflux');

var FilterActions = require('../actions/FilterActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,
  init: function() {
    this.filter= {filterState: true};
  },
  changeFilterState: function(state) {
    this.filter.filterState = !state;
    this.trigger(this.filter);
  },
  getFilterState: function() {
   return this.filter;
  }
});

module.exports = FilterStore;

