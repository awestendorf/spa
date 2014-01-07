var express = require('express');
var fs = require('fs');
var app = express();
var DIR = '.';

app.get('/', function(req, res){
  fs.readdir( DIR, function(err, files) {
    console.log( files );
    var s = '';
    files.forEach( function(file) {
      s += file;
      s += '<br>';
    });
    //files.map( res.send );
    res.send( s );
  } );
  //res.send('hello world');
});

app.listen(3000);
