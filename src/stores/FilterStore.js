var Reflux = require('reflux');

var FilterActions = require('../actions/FilterActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,
  init: function() {
    this.readState: {}
  },
  receiveArticlesData: function(snapshot) {
    this.trigger(snapshot.val());
  },
  removeArticle: function(id) {
    fbChild.child(id + "/").remove();
  }
  
});

module.exports = FirebaseStore;