var Reflux = require('reflux');
var assign = require('object-assign');
var request = require('superagent');

var Actions = require('../actions/ArticleActions');
var FirebaseStore = require('../stores/FirebaseStore');
var Firebase = require('firebase');
var fb = new Firebase("https://glaring-fire-8850.firebaseio.com/").child('articles');



var ArticlesStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    this.listenTo(FirebaseStore, Actions.receiveArticleData);
  },
  receiveArticleData: function(articles) {
    this.articles = articles|| {};
    this.trigger(this.getArticles());
  },
  addUrl: function(url) {
    request.post('http://mysterious-depths-6243.herokuapp.com/scraper')
    .type('form')
    .send({url:url})
    .end(function(err, res){   
      this.trigger(res['text']);
    }.bind(this))
  },
  removeArticle: function(id) {
    fb.child(id).remove();
  },
  getArticle: function(id) {
    var arr=[];
    var dataObj = this.articles;
    var idObj = {};
    
    for (var key in dataObj) {
      idObj = {id: key}
      var articleObj = assign({}, dataObj[key], idObj);
      arr.push(articleObj);
    }
   // console.log(dataObj);
    var singleArticle = arr.filter(function(article){
         return article.id == id
    })[0]; 
    return singleArticle;
    console.log(singleArticle)
  },
  getArticles: function() {
    var arr=[];
    var dataObj = this.articles;
    var idObj = {};
    
    for (var key in dataObj) {
      idObj = {id: key}
      var articleObj = assign({}, dataObj[key], idObj);
      arr.push(articleObj);
    }
    //console.log(dataObj);
    return arr;
  }
});

module.exports = ArticlesStore;