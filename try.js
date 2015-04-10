/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function start () {
  var xhr = new XMLHttpRequest();
  
  var params = 'url='+'http://www.troikatech.com/blog/2014/11/26/ensime-and-emacs-as-a-scala-ide';
  
  xhr.open('POST', 'http://mysterious-depths-6243.herokuapp.com/scraper', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //xhr.onreadystatechange = '...';
  xhr.send(params);
}
//'url=http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/'

start();*/

/*var Firebase = require('firebase');
var fb = new Firebase("https://glaring-fire-8850.firebaseio.com/").child("articles");
fb.child("-JmPVe2tsQpyBo8smtWU").remove();*/
var arr = [{name: "mariya"}, {name:"irina"}, {name: 'kate'}, {name: "mariya"}]; 


var arrFilt = arr.filter(function(article) {
  return article.name == 'mariya';
});
console.log(arrFilt);

/*var singleArticle = arr.filter(function(article){
         return article.id == id
    })[0];*/


