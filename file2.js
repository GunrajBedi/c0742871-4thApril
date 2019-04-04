//second commit
var user={
    first_name:"CSS",
    last_name:"HTML",
    age:4,/*from w w w. java 2 s .c o m*/
    website: "java2s.com"

};

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    //res.end('hello world');
    for (key in user){
       res.write(key);
    }
    res.end();


}).listen(8082);
