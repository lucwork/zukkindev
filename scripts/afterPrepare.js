#!/usr/bin/env node
 
// this plugin replaces arbitrary text in arbitrary files
//
// Look for the string CONFIGURE HERE for areas that need configuration
//
 
var fs = require('fs');
var fsextra = require("fs-extra");
var path = require('path');
var rootdir = process.argv[2];
//var amb = process.env.IONIC_ENV;
 var amb='dev';

function copyFile(src, dest) {
  let readStream = fs.createReadStream(src);
  readStream.once('error', (err) => {
    console.log(err);
  });
  readStream.once('end', () => {
    console.log('done copying '+dest);
  });
  readStream.pipe(fs.createWriteStream(dest));
}

module.exports = function(ctx) {
    let rootdir =  ctx.opts.projectRoot;
    let filename = 'settings.json';
    let src = path.join(rootdir+'/src/environments/'+amb, filename);
    let destDir = path.join(rootdir+'/www/', 'assets');

    fs.access(destDir, (err) => {
        if(err) {
            fs.mkdirSync(destDir);
        }
        copyFile(src, path.join(destDir, filename));
    });

    
    let imgFolder = rootdir+'/src/assets/images';
    var destination = rootdir+'/www/images'
    // copy source folder to destination
    fsextra.copy(imgFolder, destination, function (err) {
        if (err){
            console.log('An error occured while copying the folder.')
            return console.error(err)
        }
        console.log('\n####Copy'+ imgFolder+' completed!')
    });

};