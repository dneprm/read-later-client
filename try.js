var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function start () {
  var xhr = new XMLHttpRequest();
  
  //var params = 'url='+'http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/';
  
  xhr.open('POST', 'http://mysterious-depths-6243.herokuapp.com/scraper', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //xhr.onreadystatechange = '...';
  xhr.send('url='+'http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/');
}
//'url=http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/'

start();