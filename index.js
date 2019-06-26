$(document).ready(function () {
    'use strict'



    /* 3.12 对象 */
    // const saml = {
    //     name: 'Sam',
    //     age: 4,
    // };

    //在同一行声明
    // const sam2 = { name: 'Sam', age: 4 };

    // const sam3 = {
    //     name: 'Sam',
    //     classification: {
    //         kingdom: 'Anamalia',
    //         phylum: 'Chardata',
    //         class: 'Mamalia',
    //         order: 'Carnivoria',
    //     },
    // }

    //答案都是一样的
    // sam3.classification.kingdom;        //Anamalia
    // sam3["classification"].kingdom;     //Anamalia
    // sam3.classification["kingdom"];     //Anamalia

    //为sam3添加一个函数 直接点,然后赋值
    // sam3.speak = function () { return "Meow!"; };

    //删除对象中的属性 居然也能删除属性的属性
    // delete sam3.classification.phylum;


    /* 3.13 Number,String和Boolean对象 */
    // const s = "hello";
    // s.toUpperCase();    //HELLO

    // const s1 = "hello";
    // s1.rating = 3;          //报错,说没有这个属性

    /* 3.14 数组 */
    //包含数组的数组
    // const a1 = [1, 2, 3, 4];
    //包含混合类型的数组
    // const a2 = [1, 'two', 3, null];
    //包含对象的数组
    // const a4 = [
    //     { name: "Ruby", hardness: 9 },
    //     { name: "Topaz", hardness: 8 },
    // ];
    //包含数组的数组
    // const a5 = [
    //     [1, 2, 3],
    //     [2, 3, 4],
    // ];

    //数组的长度
    // const arr = ['a', 'b', 'c'];
    // arr.length; //3

    //访问元素
    // arr[0]; //'a'

    //数组最后一个元素的下标是arr.length-1
    // arr[arr.length - 1];    //'c'

    //修改数组中的元素
    // const arr1 = [1, 2, 'c', 4, 5];
    // arr1[2] = 3;    //arr1的值为[1,2,3,4,5]

    /* 3.16 日期 */
    //创建一个表示档期日期和事件的日期对象,使用new Date()即可
    // const now = new Date();
    // now;    //Thu Jun 20 2019 09:25:37 GMT+0800 (CST)
    //创建一个指定日期(上午12:00)的日期对象
    // const halloween = new Date(2016, 9, 31); //注意,月份是从0开始的:9=十月
    //创建一个指定日期和时间的日期对象
    // const halloweenParty = new Date(2016, 9, 31, 19, 0);
    //创建日期对象后,就可以调用一些方法来检索该对象的组件
    // halloweenParty.getFullYear();   //2016
    // halloweenParty.getMonth();      //9
    // halloweenParty.getDate();       //31
    // halloweenParty.getDay();        //1(Mon;0=Sun,1=Mon)
    // halloweenParty.getHours();      //19
    // halloweenParty.getMinutes();    //0
    // halloweenParty.getSeconds()     //0
    // halloweenParty.getMilliseconds()//0

    /* 3.17 正则表达式 */
    //非常简单的邮箱识别器
    // const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)\b/;

    /* 3.19.1 转换成数字 */
    // const numStr = "33.3";
    // const num = Number(numStr)

    //获取当前时间
    // const d = new Date();
    //转换为当前的时间戳
    // const ts = d.valueOf();

    /* 3.19.2 转换成字符串 */
    // const n = 33.3;
    // const ss = n.toString();

    //数组转字符串
    // const arr11 = [1, true, "hello"];
    // arr11.toString(); //"1,true,hello"

    /* 3.19.3 转换成布尔值 */
    // const n1 = 0;            //false
    // const b1 = !!n1;         //false
    // const b2 = Boolean(n);  //false

    /* 3.2.0 小结 */
    //所有数字都是双精度浮点型

    /* 4.1 控制流的底层 */
    /* 4.1.1 while循环 */
    // let funds = 50;
    // while (funds > 1 && funds < 100) {
    //     //do...
    //     funds = funds + 20;
    //     console.log("2");
    // }

    /* 4.1.5 if else语句 */
    // const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    // let totalBet = rand(1, funds);
    // if (totalBet === 7) {
    //     totalBet = funds;
    //     bets.heart = totalBet;
    // } else {
    //     //do...
    // }

    /* 4.1.6 do...while循环 */
    //该循环至少会被执行一次的
    // let remaining = totalBet;
    // do {
    //     //do...
    //     remaining = remaining + 1;
    //     console.log("1");
    // } while (remaining > 0);

    /* for循环 */
    // for (let i = 0; i < 3; i++) {
    //     //do...
    // }

    /* 4.2.1 控制流异常 */
    //break 提前结束循环
    //continue 跳到循环的下一步
    //return    退出当前方法(不管进行到控制流的哪一步)
    //throw     指出必须被异常处理器所捕获的异常


    /* 4.2.3 元语法(类似于简写) */
    // while(condition)
    //     statement

    // if(condition)
    //     statement1
    // [elsr statement2]

    // do
    //     statememt
    // while(condition)

    // for([initialization];[condition];[final-expression])
    //     statement

    /* 4.2.5 switch语句 */
    // switch (0) {
    //     case 0:

    //         break;
    //     case 1:

    //         break;
    //     case 2:

    //         break;

    //     default:
    //         break;
    // }

    /* 4.2.6 for...in循环 */
    // const player = {name:'Thoms',rank:'Midshipman',age:25};
    // for (let prop in player) {
    //     if (player.hasOwnProperty(prop)) {  //最好加上,目前不知道意思  
    //         console.log(prop+':'+player[prop]);
    //     }
    // }

    // function rand(m,n) {
    //     return m + Math.floor((n-m+1)*Math.random());
    // }
    // function randFace() {
    //     return ["crown","anchor","heart","spade","club","diamond"]
    //         [rand(0,5)];
    // }
    // const hand = [randFace(),randFace(),randFace()];
    // for (let face of hand) {
    //     console.log('You rolled....'+face);
    // }

    /* 5.4比较运算符 */
    // ===严格相等(值相同,类型相同)
    // == 非严格(值相同,类型不同也行)

    /* 5.5 比较数字 */
    // let num1 = 5;
    // // isNaN 函数用于检查其参数是否是非数字值
    // !isNaN(num1)    //是否为数字

    /* 5.6 字符串链接 */
    // 3 + 5 + '8'; //'88'
    // '33' + 5 + 8;//'358'

    /* 5.7 逻辑运算符 真值假值 */
    /*
        1.undefinded
        2.null
        3.fales
        4.0
        5.NaN
        6.''(空字符串)
    */

    /* 5.8.1 短路求值 */
    //x && y 如果两个值为true则选择最右边(y),其他的都是选择false(优先选择最左边的false)
    //x || y 如果两个值都是false,则选择最右边的(y),其他的选择true(优先选择最左的true)

    // let options
    // if (!options) options = {};
    // options = options || {};

    /* 5.8.4 逗号运算符 */
    // let x = 0, y = 10, z;
    // z = (x++, y++);
    // console.log(z); //10

    /* 5.9.2 类型判断表达式 */
    // typeof undefined = "undefined"
    // typeof null = "object"
    // typeof {} = "object"
    // typeof true = "boolean"
    // typeof 1 = "number"
    // typeof "" = string
    // typeof Symbol() = "symbol"
    // typeof function(){} = "function"


    /* 5.10 解构赋值 */
    //这个就是单独创建属性给他们批量赋值
    // const obj = {b:2,c:3,d:4};
    // let a,b,c;
    //{a,b,c} = obj;
    // ({a,b,c} = obj);

    //数组
    // const arr = [1,2,3];
    //数组解构赋值
    // let [x,y] = arr;
    // x //1
    // y //2

    // const arr = [1,2,3,4,,5];
    // let [x,y,...rest] = arr;
    // x = 1
    // y = 2
    // rest = [3,4,5];

    // let a = 5, b = 10;
    // [a,b] = [b,a];
    // a = 10
    // b = 5


    /* 6.3.2 解构参数 */
    // function getSentence({subject,verb,object}) {

    // }
    // const o = {
    //     subject = "1",
    //     verb = "2",
    //     object = "3",
    // }
    // getSentence(o)

    //展开操作符
    // function addPrefix(prefix,...words) {
    //     const prefixedWords = [];
    //     for(let i = 0;i < words.length;i++) {

    //     }
    // }
    // addPrefix(1,2,3,4,5,5,6);

    //默认值,这个和swift,那个初始化默认值一样,不传就当默认
    // function f(a,b = "default",c = 3) {

    // }
    // f(5,6,7)    //5-6-7
    // f(5,6)      //5-6-3
    // f(5)        //5-default-3
    // f()         //undefined-default-3

    /* 6.4 函数作为对象属性 */
    // const o = {
    //     name:'Wallace',
    //     bark: function() {return 'Woof!';},
    // }
    //同等
    // const o = {
    //     name:'Wallace',
    //     bark() {return 'Woof!';},
    // }


    /* 匿名函数 一般作为参数时使用的,或者贪快 */
    // const f = function() {

    // };

    /* 6.7 箭头符号 */
    //=> 可以省略function 和 return
    // const f1 = function() {return "hello";}
    // const f1 = () => "hello";
    // const f3 = function(a,b) {return "hello";}
    // const f3 = (a,b) => a+b;

    /* 6.8 调用.请求和绑定 */
    // const bruce = {name:"Bruce"};
    // const madeline = {name:"Madeline"};
    // function greet() {
    //     return 'Hello,Im'+this.name;
    // }
    // greet();
    // greet.call(bruce);
    // greet.call(madeline);

    // function update(birthYear,occupation) {
    //     this.birthYear = birthYear;
    //     this.occupation = occupation;
    // }
    //我的理解 update.call(a,b,c)   a=是call的参数(this) b=是update的第一个参数, c=是update的第二个参数
    // update.call(bruce,1949,'singer');
    //所以bruce会多了2个参数,分别为birthYear和occupation
    //打印结果{name:'Bruce',birthYear:'1949',occupation:'singer'}
    // console.log(bruce);

    //call会像一般的函数一样直接获取参数
    //apply则以数组的方法获取参数
    //bind方法可以给一个函数永久地绑定this值

    // update.apply(bruce,[1955,'actor']);
    //打印结果{name:'Bruce',birthYear:'1955',occupation:'actor'}

    //获取数组中最大值和最小值
    // const arr = [2, 3, -5, 15, 7];
    // const max = Math.max.apply(null,arr);
    // const min = Math.min.apply(null,arr);
    // const newBruce = [1948,'martial','artist'];

    //可以使用展开运算符(...)实现
    // update.call(bruce,...newBruce);
    // Math.max(...arr);
    // Math.min(...arr);

    // const updateBruce = update.bind(bruce);
    // updateBruce(1965,'actor');  //{name:'Bruce',birthYear:'1965',occupation:'actor'}
    // updateBruce.call(madeline,1234,'king'); //{name:'Bruce',birthYear:'1234',occupation:'king'}
    //name却没有改变,因为用了bind

    // const updateBruce1949 = update.bind(bruce,1949);
    // updateBruce1949('singer,songwriter');
    //bruce现在的值是{name:Bruce,birthYear:1949,occupation:singer,songwriter};
    //这里有个不懂得,为啥name没有变,如果我要改变其他参数呢?

    //call会像一般的函数一样直接获取参数
    //apply则以数组的方法获取参数
    //bind方法可以给一个函数永久地绑定this值

    /* 作用域 */
    // let f;
    // {
    //    let o = {note:'safe'};
    //    f = function() {
    //        return o;
    //    } 
    // }
    // let oRef = f();
    // oRef.note = 'Not so safe after all!';

    /* 7.7 即使调用函数表达式 */
    //这种写法是会自动调用的
    // (function(){

    // })();

    //突然不知道这种写法的用处
    // const message = (function() {
    //     const secret = "I'm a secret!";
    //     console.log(1); //最开始调用
    //     return 'The secret is' + secret.length + 'characters long';
    // })();
    // console.log(2); //最后调用

    //这种x是全局变量(js默认以var进行声明)
    // if (x !== 3) {
    //     console.log(y);
    //     var y = 5;
    //     if (y === 5) {
    //         var x = 3;
    //     }
    //     console.log(y);
    // }
    // if (x === 3) {
    //     console.log(y);
    // }

    /* 7.9 函数提升 */
    //这里有个问题,如果使用默认的创建函数,则没有位置的限制
    // f();
    // function f() {
    //     console.log('f');
    // }
    //如果函数被赋值,则有没位置的限制(申明方法必须在调用者的前面)
    // f();
    // let f = function() {
    //     console.log('f');
    // }

    /*  闭包的初理解
        闭包的作用,创建一个不是全局变量的全局变量
        简单说就是不是随便可以修改的全部变量
        其中一个特点,retrue一个函数
    */

    /* 8.2.1 在起始和末尾添加或删除元素 */
    // const arr = ["b","c","c"];
    // arr.push("e");  //添加元素到最后一位
    // arr.pop();      //删除最后一位元素
    // arr.unshift("a");   //添加元素到第一位
    // arr.shift();    //删除第一位元素

    /* 8.2.2 在末尾添加多个元素 */
    // const arr = [1,2,3];
    // arr.concat(4,5,6);      //返回[1,2,3,4,5,6]; arr没有改动
    // arr.concat([4,5,6]);    //返回[1,2,3,4,5,6]; arr没有改动
    // arr.concat([4,5],6);    //返回[1,2,3,4,5,6]; arr没有改动
    // arr.concat([4,[5,6]]);  //返回[1,2,3,4,[5,6]]; arr没有改动

    //所有的位置的是含头不含尾的
    /* 8.2.3 获取子数组 2个参数.第一个是开始位置,第二个是结束位置,第二个参数可以不填,则默认为到最后 */
    // const arr = [1,2,3,4,5];
    // arr.slice(3);       //返回[4,5]; arr没有改动
    // arr.slice(2,4);     //返回[3,4]; arr没有改动
    // arr.slice(-2);      //返回[4,5]; arr没有改动
    // arr.slice(1,-2);    //返回[2,3]; arr没有改动
    // arr.slice(-2,-1);   //返回[4]; arr没有改动

    /* 8.2.4 从任意位置添加或删除元素 */
    //splice第一个参数其实修改位置,第二个参数是需要删除的元素的个数(如果不删,则传0),其他参数是需要添加到数组的元素
    // const arr = [1,5,7];
    // arr.splice(1,0,2,3,4);  //返回[];arr现在是[1,2,3,4,5,7];
    // arr.splice(5,0,6);      //返回[];arr现在是[1,2,3,4,5,6,7];
    // arr.splice(1,2);        //返回[2,3];arr现在是[1,4,5,6,7];
    // arr.splice(2,1,'a','b');//返回[5];arr现在是[1,4,'a','b',6,7];

    /* 8.2.5 数组内的分割和替换 */
    //第一个参数表明要复制到哪(目标位置),第二个参数是从哪里开始复制,最后一个(可选)参数是复制到哪里结束
    // const arr = [1,2,3,4];
    // arr.copyWithin(1,2);        //arr现在是[1,3,4,4];
    // arr.copyWithin(2,0,2);      //arr现在是[1,3,1,3];
    // arr.copyWithin(0,-3,-1);    //arr现在是[3,1,1,3];

    /* 8.2.6 用指定值填充数组 */
    //将一个固定值赋给数组中任意位置元素(修改当前数组),这个方法跟数组构造器(可以指定数组的初始大小)
    //可以任意指定一个起始位置和结束位置,然后填充这部分的数组值(下标还可以为负值)
    // const arr = new Array(5).fill(1);   //arr初始化为(1,1,1,1,1)
    // arr.fill("a");      //arr现在是["a","a","a","a","a"]
    // arr.fill("b",1);    //arr现在是["a","b","b","b","b"]
    // arr.fill("c",2,4);  //arr现在是["a","b","c","c","b"]
    // arr.fill(5.5,-4);   //arr现在是["a",5.5,5.5,5.5,5.5]
    // arr.fill(0,-3,-1);  //arr现在是["a",5.5,0,0,5.5]

    /* 8.2.7 数组反转和排序 */
    // const arr = [1,2,3,4,5];
    // arr.reverse();  //arr is now [5,4,3,2,1]
    // const arr = [5,3,2,4,1];
    // arr.sort();     //arr is now [1,2,3,4,5]
    // const arr = [{name:"Suzanne"},{name:"Jim"},{name:"Trevor"},{name:"Amanda"}];
    // arr.sort(); //arr没有变化
    // arr.sort((a,b) => a.name > b.name); //arr按照元素name属性的字母顺序排序
    // arr.sort((a,b) => a.name[1] < b.name[1]);   //arr按照元素name属性的第二个字母的字母顺序就行排序

    /* 8.3 数组搜索 */
    //返回-1,则表示没有匹配到元素
    //indexOf重开头找   lastIndexOf重结尾找
    //不知为啥,数组没有找到
    // const o = {name:"Jerry"};
    // const arr = [1,5,"a",o,true,5,[1,2],"9"];
    // arr.indexOf(5);                 //returns 1
    // arr.lastIndexOf(5)              //returns 5
    // arr.indexOf("a");               //returns 2
    // arr.lastIndexOf("a")            //returns 2
    // arr.indexOf({name:"Jerry"});    //returns -1
    // arr.indexOf(o);                 //returns 3
    // arr.indexOf([1,2]);             //returns -1
    // console.log(arr.indexOf([1,2]));
    // arr.indexOf("9");               //returns 7
    // arr.indexOf(9);                 //returns -1

    // arr.indexOf("a",5);             //returns -1
    // arr.indexOf(5,5);               //returns 5
    // arr.lastIndexOf(5,4);           //returns 1
    // arr.lastIndexOf(true,3);        //returns -1    

    // findIndex 可以选择数组里的元素,加有条件 返回数组中的下标
    // const arr = [{id:5,name:"Judith"},{id:7,name:"Francis"}];
    // arr.findIndex(a => a.id === 5);             return 0
    // arr.findIndex(a => a.name === "Francis");   return 1
    // arr.findIndex(a => a === 3);                return -1
    // arr.findIndex(a => a.name === 17);          return -1

    // find 如果查询得到则返回该特定元素
    // const arr = [{id:5,name:"Judith"},{id:7,name:"Francis"}];
    // arr.find(o => o.id === 5);  return Object {id:5,name:"judith"}
    // arr.find(o => o.id === 2);  return null

    //寻找以指定下标开始的元素的平方数
    // const arr = [1,17,16,5,4,16,10,3,49];
    // arr.find((x,i) => i > 2 && Number.isInteger(Math.sqrt(x))); return 4

    //find和findIndex还允许在方法调用过程中指定this变量使用的值,他么么可以用在需要调用某个对象方法的场景中
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //         this.id = Person.nextId++;
    //     }
    // }
    // Person.nextId = 0;
    // const jamie = new Person("Jamie");
    //     juliet = new Person("Juliet");
    //     peter = new Person("Peter");
    //     jay = new Person("jay");
    // const arr = [jamie,juliet,peter,jay];
    // //选择1:直接比较ID:
    // arr.find(p => p.id === juliet.id)   //返回juliet对象
    // //选择2:使用this参数
    // arr.find(p => p.id === this.id, juliet);    //返回juliet对象

    // 一旦找到符合条件的元素(只需要一个符合条件的元素,所以在找到第一个元素后会停止查找)
    // some方法就会返回true,否则返回false
    // const arr = [5,7,12,15,17];
    // arr.some(x => x%2 === 0);   //true; 12是偶数
    // arr.some(x => Number.isInteger(Math.sqrt(x)));  //false没有平方数

    //而当数组中的每个元素都符合条件的时候,every方法才会返回true,否则返回false,当every方法发现一个不符合条件的元素时,就会停止查找并返回false,否则,会扫描整个数组
    // const arr = [4,6,16,36];
    // arr.every(x => x%2 === 0);  //true 没有奇数
    // arr.every(x => Number.isInteger(Math.sqrt(x))); //false 6不是平方数

    /* 数组的基本操作: map和filter */
    // const cart = [{name:"Widget",price:9.95},{name:"Gadget",price:22.95}];
    // const names = cart.map(x => x.name);    //["Widget","Gadget"]
    // const prices = cart.map(x => x.price);  //[9.95,22.95]
    // const discountPrices = prices.map(x => x * 0.8); //[7.96,18.36]
    // const lcNames = names.map(x => x.toLocaleLowerCase());  ["widget","gadget"]

    // 合并成一个数组
    // const items = ["Widget","Gadget"];
    // const prices = [9.95,22.95];
    // const cart = items.map((x,i) => ({name:x,price:prices[i]}));
    // cart:[{name:"Widget",price:9.95},{name:"Gadget",price:22.95}]

    // filter,删除数组中不需要的元素.像map一样,他返回一个删除了某些元素的数组
    // 创建一副牌
    // const cards = [];
    // for (let suit of ['H', 'C', 'D', 'S'])  //heaets,clubs,diamonds,spades
    //     for (let value = 1; value <= 13; value++)
    //         cards.push({ suit, value });
    // //找到所有含有2的卡片
    // cards.filter(c => c.value === 2);
    // [{ suit: 'H', value: 2 }, { suit: 'C', value: 2 }, { suit: 'D', value: 2 }, { suit: "S", value: 2 }]
    // // (简单起见,下面的代码中只列出数组长度)
    // // 找出所有方块
    // cards.filter(c => c.suit === 'D');  //length: 13;
    // // 找到所有花色牌
    // cards.filter(c => c.value > 10);    //length: 12;
    // //找到所有未红桃的花色牌
    // cards.filter(c => c.value > 10 && c.suit === 'H');  //length: 3

    // function cardToString(c) {
    //     const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    //     const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    //     //每一次调用cardToString的时候去构建值,不是一个高效的方法
    //     //如何找出一个高效的方法就作为读者练习吧
    //     for (let i = 2; i <= 10; i++) values[i] = i;
    //     return values[c.value] + suits[c.suit];
    // }
    // //找到所有包含2的牌
    // cards.filter(c => c.value === 2).map(cardToString);
    // //找到所有红桃的花色牌
    // cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString);

    /* 8.5 数组魔法 reduce */
    // 求总和
    // const arr = [5,7,2,4];
    // const sum = arr.reduce((a,x) => a += x,0);
    // console.log(sum);

    // const arr = [5,7,2,4];
    // const sum = arr.reduce((a,x) => a += x);

    // const arr = Array(10).map(function(x) {return 5});
    // console.log(arr);

    /* 8.7 字符串连接 */
    // join 好像数组转字符串
    // const arr = [1,null,'hello','world',true,undefined];
    // delete arr[3];
    // arr.join();         //"1,,hello,,true"
    // arr.join('');       //"1hellotrue"
    // arr.join(' -- ');   //"1 -- -- hello -- -- true --"

    /* 9.1.1 for...in */
    //Symbol?
    // const SYM = Symbol();
    // const o = {a:1,b:2,c:3,[SYM]:4};
    // for(let prop in o) {
    //     if(!o.hasOwnProperty(prop)) continue;
    //     console.log(prop+':'+o[prop]);
    // }
    //虽然for...in也可以用来迭代数组,但这通常被认为是一个不好的实践,建议大家使用一般的for循环或forEach迭代数组

    /* 9.1.2 Object.keys */
    // const SYM = Symbol();
    // const o = {a:1,b:2,c:3,[SYM]:4};
    // Object.keys(0).forEach(prop => console.log(prop+':'+o[prop]));

    // 列出某个对象中所有以字符x开头的属性
    // const o = {apple:1,xochitl:2,balloon:3,guitar:4,xylophone:5};
    // Object.keys(0)
    // .filter(prop => prop.match(/^x/))
    // .forEach(prop => prop => console.log(prop+':'+o[prop]));

    /* 9.2.1 创建类和实例 */
    //创建了一个名为Car的类型
    // class Car {
    //     constructor(make, model) {
    //         this.make = make;
    //         this.model = model;
    //         this.userGears = ['P', 'N', 'R', 'D'];
    //         this.userGear = this.userGears[0];
    //     }
    //     shift(gear) {
    //         if(this.userGears.indexOf(gear) < 0)
    //             throw new Error("Invalid gear:"+gear);
    //         this.userGear = gear;
    //     }
    // }
    // const car1 = new Car("Tesla","Model S");
    // const car2 = new Car("Mazda","3i");
    // car1.shift("D");
    // car2.shift("R");

    // //instanceof运算符,这个运算符可以告诉大家一个给定的对象是否属于某个类
    // car1 instanceof Car //true
    // car1 instanceof Array //false

    /* 9.2.2 动态属性 */
    // class Car {
    //     constructor(make,model){
    //         this.make = make;
    //         this.model = model;
    //         this._userGears = ['P','N','R','D'];
    //         this._userGear = this._userGears[0];
    //     }
    //     get userGear() { return this._userGear; }
    //     set userGear(value) {
            // if(this._userGears.indexOf(value) < 0)
            //     throw new Error("Invalid gear:"+gear);
            // this._userGears = value;
    //     }
    //     shift(gear) { this.userGear = gear; }
    // }

    // const Car = (function() {
    //     const carProps = new WeakMap();
    //     class Car {
    //         constructor(make,model){
    //             this.make = make;
    //             this.model = model;
    //             this._userGears = ['P','N','R','D'];
    //             carProps.set(this,{ userGear: this._userGears[0] });
    //         }
    //         get userGear() { return carProps.get(this).userGear; }
    //         set userGear(value) {
    //             if(this._userGears.indexOf(value) < 0)
    //                 throw new Error("Invalid gear:"+gear);
    //             carProps.get(this).userGear = value;
    //         }
    //         shift(gear) { this.userGear = gear; }
    //     }
    //     return Car;
    // })();

    /* 9.2.3 类即函数 */
    function Car(make,model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P','N','R','D'];
        this._userGear = this._userGears[0];
    }




});