#!/usr/bin/env node
var cli = require('cli'), options = cli.parse();
var idx = 0;
cli.withStdinLines(function(lines, newline) {
  lines.forEach((line)=> {
    if (line.length === 0) return;
    idx++;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    // https://www.youtube.com/watch?v=wB-GTeW0dAI&feature=youtu.be
    // https://youtu.be/wB-GTeW0dAI
    var ytl = /https:\/\/(?:www[.])?youtube[.]com\/watch[?]v=([^&]*)/;
    var resl = ytl.exec(line);
    var yt = /https?:\/\/(?:www.)?youtu.be\/([^&]*)/;
    var res = yt.exec(line);
    console.log('line '+idx+' '+line+'\n',resl || res);
  });
});


var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };
var fixNumber = function(n,m) { if (!isNumber(n)) return m; else return n; };
var notEmpty = function(s) { return typeof s == "string" && s.length > 0; };
