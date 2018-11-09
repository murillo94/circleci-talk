var copydir = require('copy-dir');

copydir('images/', 'docs/images/', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Imagens movidas');
  }
});
