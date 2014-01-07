var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  , fs = require('fs');

// TODO this should be loaded from elsewhere
var DIR = '.';

var distsController = new Controller();

distsController.index = function() {
  var thisbit = this;
  this.title = 'Index of distributions';
  console.log('wtf?');
  this.render();
  console.log('done?');
  return;
  fs.readdir( DIR, function(err, files) {
    console.log( files );
    this.dirs = [];
    //files.forEach( function(file) {
      //// TODO: make this asynchronous
      //var stat = fs.statSync(file)
      //if( stat.isDirectory() ) {
        //this.dirs.push( file );
      //}
    //});
    this.dirs = ['one', 'two'];
    thisbit.render('asdf');
  });
}

module.exports = distsController;

