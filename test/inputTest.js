var errorType = require('./../src/errorType');
var inputCheck= require('./../src/inputCheck');

/**
 * File Name: inputCheckTest.js
 * Author:肖芳
 * Create Date: 2018.07.29
 * Description:
 * 测试输入检查模块**
 **/

//测试输入的有效性用例：
var test0=" ";
console.log("输入无效的数据: "+test0);
inputCheck(test0);
var test1="%55";
console.log("输入无效的数据: "+test1);
inputCheck(test1);
var test2="我 ww\n0,1 $,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入无效的数据: "+test2);
inputCheck(test2);
//测试输入数据的范围
var test3="-3 3\n0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入超出范围的数据: "+test3);
inputCheck(test3);
var test4="3 200\n0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入超出范围的数据: "+test4);
inputCheck(test4);
var test5="-3 2\n0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入超出范围的数据: "+test5);
inputCheck(test5);
//测试输入合法且正确的数据：
var test6="3 3\n0,1 0,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入合法的数据: "+test6);
inputCheck(test6);