
var Reflux = require('reflux');
//var Backend = require('../utils/backend');

var Actions = Reflux.createActions([
  "receiveArticleData",
  "addUrl",
  "removeArticle",
  "changeArticleReadState"
]);

module.exports = Actions;