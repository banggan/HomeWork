/**
 * File Name: errorType.js
 * Author:肖芳
 * Create Date: 2018.07.28
 * Description:
 *   **程序中错误信息**
 */
//定义四种错误
var errorType ={
	invalidError:'invalidError:Invalid number format.',
	rangeError:'rangeError:Number out of range.',
	formatError:'formatError:Incorrect command format.',
	connectError:'connectError:Maze format error.'
};
//导出,供其他模块使用
module.exports = errorType;