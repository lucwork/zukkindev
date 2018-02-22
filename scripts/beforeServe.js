#!/usr/bin/env node
 
var fs = require('fs');
var path = require('path');
var rootdir = process.argv[2];
 
console.info("beforeServe");
function copyFile(src, dest) {
  let readStream = fs.createReadStream(src);
  readStream.once('error', (err) => {
    console.log(err);
  });
  readStream.once('end', () => {
    console.log('done copying');
  });
  readStream.pipe(fs.createWriteStream(dest));
}

