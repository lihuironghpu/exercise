/**
 * Created by lhr on 16/8/6.
 */
//创建对象－字面量
//var obj = {};
//obj.x = 1;
//obj.y = 2;

//创建对象－new／原型链
function foo(){}
foo.prototype.z = 3;

var obj = new foo();
obj.x = 1;
obj.y = 2;

obj.x;//1
obj.y;//2
obj.z;//3;查找原型链的z

'z' in obj;//true
obj.hasOwnProperty('z');//false

obj.z = 5;

obj.hasOwnProperty('z');
foo.prototype.z; //3
obj.z;//5

delete obj.z;
obj.z;//3

//创建对象－Object.create
var obj = Object.create({x:1});//对象的原型指向参数
obj.x;//1
typeof obj.toString();//"function"
obj.hasOwnProperty("x");//false

var obj = Object.create(null);
obj.toString();//undefined


//属性读写
var obj = {x:1,y:2};
obj.x;//1
obj["y"];//2
obj.z;//undefined  查找对象－查找原型链  查找不到就undefined
obj.y.z = 2;//TypeError: Cannot read property 'z' of undefined
obj.y.z;//TypeError: Cannot read property 'z' of undefined

//判断属性是否存在
var yz;
if(obj.y){
    yz = obj.y.z;
}

//属性删除
var person = {age:28,uname:'lhr'};
delete person.age;//true
delete person["uname"];//true
person.age;//undefined
delete person.age;

delete Object.prototype;//false

var descriptor = Object.getOwnPropertyDescriptor(Object,'prototype');
descriptor.configurable;//false


//或者巧用运算符
var yz2 = obj && obj.y && obj.y.z;



Object.keys(obj);//["x", "y"]
var obj1 = {x:1,y:2,z:{z1:4,z2:5}};
Object.keys(obj1);//["x", "y", "z"]



