var errorType = require('./../src/errorType');
var connectDataCheck= require('./../src/connectCheck');

/**
 * File Name: connectCheck.js
 * Author:肖芳
 * Create Date: 2018.07.29
 * Description:
 * 测试连通性的模块**
 **/
//测试连通错误的用例：
var test1="0,1 0,2;4,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入不是相邻连接数据: "+test1);
connectDataCheck(test1.split(';'),3,3);

var test2="0,1 0,0;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
console.log("输入相邻连接数据: "+test2);
connectDataCheck(test2.split(';'),3,3);

