var Reflux = require('reflux');
var assign = require('object-assign');

var Actions = require('../actions/ArticleActions');
var FirebaseStore = require('../stores/FirebaseStore');





//var _articles = [];

var ArticlesStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    this.listenTo(FirebaseStore, Actions.receiveArticleData);
  },
  receiveArticleData: function(articles) {
    /*var fbdata = snapshot.val();
    for (var key in fbdata) {
      _articles.push(fbdata[key])
    };*/
    
   this.articles = articles|| {};
    this.trigger(this.getArticles());
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
    console.log(dataObj);
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
  /*addToCart: function(code) {
    var cartProduct;
    var product = products.filter(function(product) {
      return product.code === code;
    })[0];

    if(this.isInCart(product)) {
      cartProduct=this.getProduct(code);
      cartProduct.quantity++;
    } else {
      cartProduct = assign({}, product, {quantity: 1});
      _cart.push(cartProduct);
    }
   //Backend.add(code);
   this.trigger(_cart);
  },
  removeFromCart: function(code) {
    var cartProduct = this.getProduct(code);
    _cart.splice(_cart.indexOf(cartProduct), 1);
    
    //Backend.remove(code);
    this.trigger(_cart);
  },
  cartChangeQuantity: function(code, quantity) {
    var cartProduct = this.getProduct(code);
    cartProduct.quantity = quantity;
    
    //Backend.changeQuantity(code, quantity);
    this.trigger(_cart);
  },
  isInCart: function(product) {
    return _cart.some(function(prod) {
      return prod.code===product.code;
    });
  },
  getProduct: function(code) {
    return _cart.filter(function(prod) {
      return prod.code===code;
    })[0];
  }*/
  
});

module.exports = ArticlesStore;