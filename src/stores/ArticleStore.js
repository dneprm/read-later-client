var Reflux = require('reflux');
//var assign = require('object-assign');

var Actions = require('../actions/ArticleActions');

var Firebase = require('firebase');
var fb = new Firebase("https://glaring-fire-8850.firebaseio.com/");
//var products = require('../products');
//var Backend = require('../utils/backend');


var _articles = [];

var ArticlesStore = Reflux.createStore({
  listenables: Actions,
  init: function() {
    fb.child("articles").on("value", Actions.recieveArticleData)
  },
  recieveArticleData: function(snapshot) {
    _articles = snapshot.val();
    this.trigger(_articles);
    
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