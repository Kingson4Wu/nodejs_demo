/**
 * Created by kxw on 2015/10/1.
 */
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true, 2, true));
console.log(util.inspect(obj, true, null, true));