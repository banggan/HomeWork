var errorType = require('./errorType.js');

/**
 * File Name: inputCheck.js
 * Author:肖芳
 * Create Date: 2018.07.28
 * Description:
 * 检测输入的有效性**
 * @param command
 **/
 var inputCheck=function(command){
    if (typeof command !== 'string') {
        console.log(errorType.invalidError);
        return false;
    }else{
        _errorCheck(command);    
    }
    
}


function _errorCheck(command){
    if(!_nullCheck(command) || !_invalidErrorCheck(command)){
        console.log(errorType.invalidError);//无效
    }else{  
        var inputArr = command.split('\n');//将输入的数据才分为两行
        var inputData={
            sizeData:inputArr[0].split(' '),//第一行数据道路网格的尺寸
            connectData:inputArr[1].split(';')//第二行数据道路网格的连通定义
        }
       if(! _sizeCheck(inputData.sizeData)){
            console.log(errorType.rangeError);//超出范围
        }else if(! _connectCheck(inputData.connectData,inputData.sizeData[0],inputData.sizeData[1])){
            console.log(errorType.rangeError);//超出范围
        }else{
            console.log('Success:input success.');
        }
        }
    /**
    * 验证输入的内容不是字符串或者空，无效;
    * @param command
    */
    function _nullCheck(command){
        if (command == " " || command.indexOf("\n")==-1) {
            return false;
        }
           return true;
    }
    

    /**
      * 验证输入的内容是否有效;
      * @param command
      */
    function _invalidErrorCheck(command){
        //判断输入是否包含汉字
        var reg1= new RegExp("[\\u4E00-\\u9FFF]+","g");
        //判断输入是否包含字母
        var reg2= /[a-z]/i;
        //判断输入是否包含特殊字符
        var reg3=new RegExp("[`~!@%#$^&*()=|{}':'\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘：”“'。、？]");
        if(reg1.test(command) || reg2.test(command) || reg3.test(command)){
            
            return false;
        }
        return true;//输入的字符串合法
    }
     /**
     * 验证输入道路网格的尺寸范围判断;
     * @param sizeData
    */
    function _sizeCheck(sizeData){
        var rows = sizeData[0];//得到行数
        var cols = sizeData[1];//得到列数
        //判断道路网格的尺寸，0~100
        if(rows<0 || cols<0 || rows >100 || cols>100){
            return false;
        }
            return true;
    }
   /**
     * 验证输入连通定义的范围判断;
     * @param connectData
    */
    function _connectCheck(connectData,rows,cols){
        for(var i=0;i<connectData.length;i++){
            items = connectData[i].split(' ');//每一组连通的数据
            var first = items[0].split(',');//第一个点坐标
            var second = items[1].split(',');//第二个坐标
            //判断点坐标的个数是否为两个
            if(items.length != 2 || first.length !=2 || second.length !=2){
                return false;
            }else{
                //得到每个点坐标(x0,y0)(x1,y1)
                var x0= first[0];
                var y0=first[1];
                var x1= second[0];
                var y1=second[1];
                //点的坐标为负数,或者大于行数或列数，超出范围
                if(x0<0 || y0<0 || x1<0 || y1<0 || x0>=rows || y0>=cols || x1>=rows || y1>=cols){
                    return false;
                }
            }
        }
        return true;
    }
 }


 module.exports =inputCheck;


 