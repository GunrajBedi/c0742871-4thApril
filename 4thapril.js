//this is js file
//this is first commit 
let a=9;
let b= 2*2;
console.log(b);


console.log('heloo.....!!');

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');


}).listen(8081);
