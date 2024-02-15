const fs = require('fs');

if (process.argv.length < 3) {
    console.error('[error] cPBML requires a file path.');
    return;
}
let filePath = process.argv[2];
console.log(process.argv.length)
  
let pbml = fs.readFileSync(filePath, 'utf8');
let htmlCode = pbml.replace(/<pbml>/g, '<html>').replace(/<\/pbml>/g, '</html>')
    .replace(/<legs>[\s\S]*?<\/legs>/g, '')
    .replace(/<eyes>[\s\S]*?<\/eyes>/g, '')
    .replace(/<arms>[\s\S]*?<\/arms>/g, '')
    .replace(/^\s*[\r\n]/gm, '');
htmlCode = "<!DOCTYPE html>\n" + htmlCode;
if (process.argv[3] === '-o') {
    fs.writeFileSync(process.argv[4], htmlCode);
} else {
    console.log(htmlCode);
}