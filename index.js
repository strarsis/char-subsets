module.exports  = function() {

  var fs        = require('fs')
  ,   path      = require('path')
  ,   eol       = require('eol')

  ,   names     = require('./names.json')
  ,   charlists = [];

  names.forEach(function(name) {

    charlists[name] = eol.auto(
      fs.readFileSync(
        path.join(__dirname, 'charlists', name + '.txt'),
        'utf8'
      )
    );
    // Never trim the string because newlines and spaces are also important!

  });

  return charlists;
}
