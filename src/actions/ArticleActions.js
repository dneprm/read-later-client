
var Reflux = require('reflux');
//var Backend = require('../utils/backend');

var Actions = Reflux.createActions([
  "receiveArticleData"
  
]);

/*Actions.addToCart.preEmit = Backend.add;
Actions.removeFromCart.preEmit = Backend.remove;
Actions.cartChangeQuantity.preEmit = Backend.changeQuantity;*/


module.exports = Actions;