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
});