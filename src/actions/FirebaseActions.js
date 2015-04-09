var Reflux = require('reflux');

var Actions = Reflux.createActions([
  "receiveArticlesData",
  "removeArticle",
  "updateArticle"
]);


module.exports = Actions;