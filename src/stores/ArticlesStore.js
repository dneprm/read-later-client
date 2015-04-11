var Reflux = require('reflux');
var assign = require('object-assign');
var request = require('superagent');

var Actions = require('../actions/ArticleActions');
var FilterStore = require('../stores/FilterStore');
var FirebaseStore = require('../stores/FirebaseStore');
var FirebaseActions = require('../actions/FirebaseActions');
var Firebase = require('firebase');
var fb = new Firebase("https://glaring-fire-8850.firebaseio.com/").child('articles');



var ArticlesStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    this.listenTo(FirebaseStore, Actions.receiveArticleData);
    this.listenTo(FilterStore, Actions.changeArticlesView);
    this.flag = FilterStore.getFilterState();
    //this.articles= {};
  },
  receiveArticleData: function(articles) {
    this.articles = articles|| {};
    this.trigger(this.getArticles());
    
  },
  addUrl: function(url) {
    request.post('http://mysterious-depths-6243.herokuapp.com/scraper')
    .type('form')
    .send({url:url})
    .end()
  },
  changeArticlesView: function() { 
    this.trigger(this.getArticles())
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
  
    var singleArticle = arr.filter(function(article){
         return article.id == id
    })[0]; 
    return singleArticle;
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
    //console.log(arr);
    //return arr;
    var articlesArr;
    if (this.flag.viewState==="unread") {
      articlesArr = arr.filter(function(article){
        return article.readState == false;
      });
    } else if (this.flag.viewState==="all") {
      articlesArr = arr;
    }
    //console.log(articlesArr)
    //return articlesArr;
    var articlesForViewArr=[];
    if (this.flag.searchState ==="") {
      articlesForViewArr = articlesArr;
    } else {
      articlesForViewArr = articlesArr.filter(function(article){
        console.log(article.title)
        return article.title.toLowerCase().indexOf(this.flag.searchState.toLowerCase()) !== -1 ||                      article.url.toLowerCase().indexOf(this.flag.searchState.toLowerCase()) !== -1;
      }.bind(this));
    }
    //console.log(articlesForViewArr)
    return articlesForViewArr;
  }
});

module.exports = ArticlesStore;