Node.js 函数
在JavaScript中，一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

函数传递是如何让HTTP服务器工作的
带着这些知识，我们再来看看我们简约而不简单的HTTP服务器：
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
现在它看上去应该清晰了很多：我们向 createServer 函数传递了一个匿名函数。
用这样的代码也可以达到同样的目的：
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);