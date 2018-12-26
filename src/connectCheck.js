var errorType = require('./errorType.js');

/**
 * File Name: connectCheck.js
 * Author:肖芳
 * Create Date: 2018.07.29
 * Description:
 * 渲染网格**
 * @param connectData连通数据，rows行数，cols列数
 **/
     var connectDataCheck= function(connectData,rows,cols){
    	//新渲染网格的大小
    	var newRows= rows*2+1;
    	var newCols= cols*2+1;
    	//生成对应的新的渲染网格的大小
    	var newMaze= buildArr(newRows,newCols);
    	for(var i=0;i<connectData.length;i++){
    	    items = connectData[i].split(' ');//每一组连通的数据
    	    var first = items[0].split(',');//第一个点坐标
    	    var second = items[1].split(',');//第二个坐标
    	    //得到每个点坐标(x0,y0)(x1,y1)
    	    var x0=first[0]*2+1;
			var y0=first[1]*2+1;
    	    var x1=second[0]*2+1;
			var y1=second[1]*2+1;
			if(x0 == x1){//两个点在同一行
					if(y0-y1 == 2){
						newMaze[x0][y1+1]='R';
					}else if(y0-y1 == -2){
						newMaze[x0][y0+1]='R';
					}else{
						console.log(errorType.connectError);
						return;
					}
				}else if(y0==y1){//两个点在同一列
					if(x0-x1 == 2){
						newMaze[x1+1][y0]='R';
					}else if(x0-x1 == -2){
						newMaze[x0+1][y0]='R';
					}else{
						console.log(errorType.connectError);
						return;
					}				
				}else{
					    console.log(errorType.connectError);
					return;
				}				 
    	}
    	//打印出渲染矩阵
    	printGrid(newMaze);
    }

/**
 * 生成渲染网格的数据;
 * @param 行数列数m,n
 */
function buildArr(m,n){
	var tArray = new Array(); //先声明一维
    for(var i=0;i<m;i++){ //一维长度为m
        tArray[i]=new Array(); 
		for(var j=0;j<n;j++){ 
			tArray[i][j]="W"; //这里将变量初始化
 		}
	}
	for(var i=1;i<m;i+=2){
		for(var j=1;j<n;j+=2){
			tArray[i][j]='R';
		}
	}
	return tArray;
}
/**
 * 打印输出结果矩阵
 * W W W W W W W 
   W R W R R R W 
   W R W R W R W 
   W R R R W R W 
   W W W W W W W
   W R R R R R W 
   W W W R W R W 
   @param  newMaze数据
 */
function printGrid(newMaze){
	for(var i=0;i<newMaze.length;i++){//遍历矩阵
	    var str="";
	    for(var j = 0;j<newMaze[i].length;j++){   
		str = str + newMaze[i][j]+" ";
	    }
	console.log(str);//一行一行输出
    }
}   

module.exports =connectDataCheck;
