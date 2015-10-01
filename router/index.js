/**
 * Created by kxw on 2015/10/1.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);