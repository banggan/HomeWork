/**
 * File Name: index.js
 * Author:肖芳
 * Create Date: 2018.07.29
 * Description:主程序
 **/
 //导入
var inputCheck = require('./src/inputCheck.js');
var connectDataCheck = require('./src/connectCheck.js');

var test = function(command){
	var inputArr = command.split('\n');//将输入的数据才分为两行
    var inputData={
    	sizeData:inputArr[0].split(' '),//第一行数据道路网格的尺寸
        connectData:inputArr[1].split(';')//第二行数据道路网格的连通定义
    }
    inputCheck(command);//测试输入的合法
    connectDataCheck(inputData.connectData,inputData.sizeData[0],inputData.sizeData[1]);
}
//测试用例：
var command="3 3\n0,1 0,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1";
test(command);