# 2018 ThoughtWorks Homework

## 文件简介

该文件是2018年校招提前批ThoughtWorks的作业题，作业来源于join.thoughtworks.cn,题目详情请查看'./2018_Q3_软件开发工程师.pdf'根据自己的理解,主要有以下方面：
- 输入的判断
- 连通性的判断
- 错误信息的提示
- 单元模块的测试
- 运行程序


## 测试说明

自己最近刚接触JavaScript的单元模块测试工具mocha的使用，由于时间有限，采用的是自己输入测试用例完成的单元模块的测试；

#### 测试使用说明

首先确保你的电脑安装了node,以及subtime、hbuild等开发工具
node的安装见博客地址：
https://blog.csdn.net/qq_26562641/article/details/72235585
安装node后，就可以开始使用啦~

#### 输入模块单元测试使用

打开命令行,进入根目录下的测试文件test;

```javascript
> node inputTest
```

输出如下：

```
Administrator@WIN-CU2MH907PHT MINGW64 /f/HomeWork_xiaofang/test
$ node inputTest
输入无效的数据:
invalidError:Invalid number format.
输入无效的数据: %55
invalidError:Invalid number format.
输入无效的数据: 我 ww
0,1 $,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1
invalidError:Invalid number format.
输入超出范围的数据: -3 3
0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1
rangeError:Number out of range.
输入超出范围的数据: 3 200
0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1
rangeError:Number out of range.
输入超出范围的数据: -3 2
0,1 -5,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1
rangeError:Number out of range.
输入合法的数据: 3 3
0,1 0,2;2,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1
Success:input success.
```

#### 连通模块单元测试使用

打开命令行,进入根目录下的测试文件test;
```javascript
> node connectTest
```
输出如下：
```
Administrator@WIN-CU2MH907PHT MINGW64 /f/HomeWork_xiaofang/test
$ node connectTest
输入不是相邻连接数据: 0,1 0,2;4,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0
2,1
connectError:Maze format error.
输入相邻连接数据: 0,1 0,0;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,
1
W W W W W W W
W R R R W R W
W R W R W R W
W R R R R R W
W W W R W R W
W R R R W R W
W W W W W W W

```
##运行说明

单元测试结束之后，可以通过以下方式运行程序
进入根目录文件夹，打开命令行，输入：
```
> node index
```

输出：
```
Administrator@WIN-CU2MH907PHT MINGW64 /f/HomeWork_xiaofang
$ node index
Success:input success.
W W W W W W W
W R W R R R W
W W W R W R W
W R R R R R W
W R W R W R W
W R R R W R W
W W W W W W W

```

## 目录结构描述

```
目录结构描述

├── README.md                         // 说明文件
│── index.js                          // 源码入口文件
│   ├── src
│   │   ├── connectCheck.js           // connectCheck 连通单元模块
│   │   ├── errorType.js              // errorType 错误提示信息模块
│   │   ├── inputCheck.js             // inputCheck 输入单元模块
├── test
│   ├── connectTest.js                // 连通测试模块
│   ├── inputTest.js                  // 输入测试模块 
└── 2018_Q3_软件开发工程师.pdf         // 题目说明

```
