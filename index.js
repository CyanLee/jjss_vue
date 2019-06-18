$(document).ready(function() {
    'use strict'



    /* 3.12 对象 */
    const saml = {
        name: 'Sam',
        age: 4,
    };

    //在同一行声明
    const sam2 = {name:'Sam',age:4};

    const sam3 = {
        name:'Sam',
        classification: {
            kingdom:'Anamalia',
            phylum:'Chardata',
            class:'Mamalia',
            order:'Carnivoria',
        },
    }

    //答案都是一样的
    sam3.classification.kingdom;        //Anamalia
    sam3["classification"].kingdom;     //Anamalia
    sam3.classification["kingdom"];     //Anamalia
    
    //为sam3添加一个函数 直接点,然后赋值
    sam3.speak = function() {return "Meow!";};
    
    //删除对象中的属性 居然也能删除属性的属性
    delete sam3.classification.phylum;


    /* 3.13 Number,String和Boolean对象 */
    const s = "hello";
    s.toUpperCase();    //HELLO

    const s1 = "hello";
    s1.rating = 3;          //报错,说没有这个属性

    /* 3.14 数组 */
    //包含数组的数组
    const a1 = [1,2,3,4];
    //包含混合类型的数组
    const a2 = [1,'two',3,null];
    //包含对象的数组
    const a4 = [
        {name:"Ruby",hardness:9},
        {name:"Topaz",hardness:8},
    ];
    //包含数组的数组
    const a5 = [
        [1,2,3],
        [2,3,4],
    ];

    //数组的长度
    const arr = ['a','b','c'];
    arr.length; //3

    //访问元素
    arr[0]; //'a'

    //数组最后一个元素的下标是arr.length-1
    arr[arr.length - 1];    //'c'

    修改数组中的元素
    const arr1 = [1,2,'c',4,5];
    arr1[2] = 3;    //arr1的值为[1,2,3,4,5]

    /* 3.16 日期 */
    

});