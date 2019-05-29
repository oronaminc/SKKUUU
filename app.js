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

app.get('/home', function(req, res){
  fs.readFile('public/html/index.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.get('/recommendation', function(req, res){
  fs.readFile('public/html/courses.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.get('/themes', function(req, res){
  fs.readFile('public/html/themes.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.get('/team', function(req, res){
  fs.readFile('public/html/team.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

app.use(express.static(path.join(__dirname, 'public')));

/*
module.exports = funtion(app){
  app.get('/', function(req, res){
    res.render('index.html');
  });
  app.get('/home', function(req, res){
    res.render('index.html');
  });
}
*/
/*
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/html/index.html');
})
*/
app.listen(8080, (err) => {
  if(!err){
    console.log('Connected 8080 port!');
  }
})