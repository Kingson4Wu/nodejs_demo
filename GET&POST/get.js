/**
 * Created by kxw on 2015/10/1.
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
/**
 * http://localhost:3000/user?name=w3c&email=w3c@w3cschool.cc
 */