/**
 * Created by kxw on 2015/10/1.
 * 阻塞代码实例
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");