var express = require('express');
var http = require('http');
var fs = require('fs');
var path = require('path');

var publicPath = path.join(__dirname, 'public');
var app = express();
app.get('/', function(req, res){
  fs.readFile('public/html/index.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

//app.use('/api', api); //redirect API calls
//app.use('/', express.static(__dirname + '/www'));
//app.use('js', express.static( 'js/boorstrap'));
//app.use('js', express.static( 'js/jquery'));
//app.use('css', express.stataic('css'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', express.static(__dirname + 'www'));
//app.use('/js', express.static(__dirname + 'node_modules/bootstrap/dist/js')); // redirect bootstrap JS
//app.use('/js', express.static(__dirname + 'node_modules/jquery/dist')); // redirect JS jQuery
//app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


/*
app.listen(8000, function(){
  console.log("Connected 8000 port!");
});
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/html/index.html');
})

app.listen(8000, (err) => {
  if(!err){
    console.log('Connected 8000 port!');
  }
})