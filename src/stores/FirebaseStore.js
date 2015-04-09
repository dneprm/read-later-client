var Reflux = require('reflux');

var Actions = require('../actions/FirebaseActions');

var Firebase = require('firebase');
var fb = new Firebase("https://glaring-fire-8850.firebaseio.com/");
var fbChild = fb.child("articles");


var FirebaseStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    fb.child("articles").on("value", Actions.receiveArticlesData)
  },
  receiveArticlesData: function(snapshot) {
    this.trigger(snapshot.val());
  },
  removeArticle: function(id) {
    fbChild.child(id + "/").remove();
  }
  
});

module.exports = FirebaseStore;