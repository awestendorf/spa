// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('pages#main');

  this.match('dists', 'dists#index');
  this.match('dists/:dist', 'dists#show');
  this.match('dists/:dist/Release', 'dist#release');
  this.match('dists/:dist/Release.gpg', 'dist#release_gpg');  // TODO: perhaps this has to be a file?
  this.match('dists/:dist/:component', 'components#show');
  this.match('dists/:dist/:component/:repo', 'repos#index');
  this.match('dists/:dist/:component/:repo/Packages', 'repos#packages');  // TODO: support the .bz2 and .gz files
  this.match('dists/:dist/:component/:repo/Release', 'repos#release');
  this.match('dists/:dist/:component/:repo/:file',  'repos#file'); 
}
