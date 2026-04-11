const zl = require('zip-lib');

const info = require('../package.json');

const name = info.name.split('/').pop();

const filepath = `./dist/wallflower-data.lcp`;

zl.archiveFolder('./lib', filepath).then(
  function () {
    console.log('done');
  },
  function (err) {
    console.log(err);
  }
);
