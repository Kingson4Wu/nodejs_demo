/**
 * Created by kxw on 2015/10/1.
 */
buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);

//------------------------
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//----------------

var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);

//-----------
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());