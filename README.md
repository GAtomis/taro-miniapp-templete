## taro小程序开发模板-小程序
# 简介

## 快速开始
安装依赖
```
    pnpm i  

```
启动开发环境
```
    pnpm dev:weapp
```
编译小程序
```
    pnpm build:weapp
```




## 开发环境
请保持node版本大于等于16.0,


## 技术栈
<p align="center">
  <a href="https://zh-hans.react.dev/">
  <svg width="50px" height="50px" viewBox="-10.5 -9.45 21 18.9" fill="none"   xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
  </a>
  <a href="https://taro.jd.com/">
   <img  width="50px"  src="https://taro.jd.com/static/images/taro.png" alt="Taro" /> 
  </a>
  <a href="https://nutui.jd.com/taro/react/2x/#/zh-CN/guide/intro-react">
   <img  width="50px"  src="https://img14.360buyimg.com/imagetools/jfs/t1/124864/1/33144/4732/63a97786F51517a97/a9ca3c1e043ceeb4.png" alt="nutui-taro" /> 
  </a>
  <a href="https://www.lodashjs.com">
   <img  width="50px" height="20px"  src="https://www.lodashjs.com/img/lodash.png" alt="lodashjs" />
  </a>
  <a href="https://dayjs.fenxianglu.cn">
   <img  width="50px" height="50px" src="https://dayjs.fenxianglu.cn/assets/logo.png" alt="dayjs" />
  </a>



</p>

## 目录结构
```
├── dist                      # 构建相关
├── config                     # 关于taro的一些开发端的配置
├── public                     # 静态资源
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── components             # 全局公用组件
│   ├── hooks                  # 通用的hooks方法
│   ├── models                 # 缓存的各个数据模块
│   ├── pages                  # 页面形象
│   ├── static                 # 静态资源
│   ├── store                  # dvajs集成的redux作为数据缓存
│   ├── utils                  # 全局公用方法
│   ├── app.config.js          # 所有关于小程序业务及环境的配置
│   ├── app.jsx                # 小程序Root页面
│   ├── context.js             # 主题配置
│   ├── dva.js                 # dva的配置
│   └── index.html             # html5页面
├──  types                     # TS类型管理
├── .env.xxx                   # 环境变量配置
├── babel.config.js            # babel编译配置
├── project.config             # 项目配置
├── project.tt.json            # 项目配置
└── package.json               # package.json
```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
    "dev:weapp": "npm run build:weapp:dev -- --watch ",
    "dev:weapp:prod": "npm run build:weapp -- --watch  ",
    "dev:weapp:stage": "npm run build:weapp:stage -- --watch ",
```

### Compiles and minifies for production
```
    "build:weapp": "taro build --type weapp --mode prod",
    "build:weapp:stage": "taro build --type weapp --mode stage",
    "build:weapp:dev": "taro build --type weapp --mode dev",
```


## 配置表规则说明
```

```
## 代理地址

## 新增页面


## 状态管理


## 和服务器交互

## 内置组件



### 字段枚举(Global&Scope)

### 全局使用lodash
 
### 全局使用dayjs
  

## 风格指南(建议项)
本项目的风格指南主要是参照 vue 官方的风格指南。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。



### html&css方面
对于写出优雅的css，我有以下几点总结：
- 合理的语义化标签例如<ul><li><nav><span>等等....
- 擅用英文缩写
- 合理的css编写规范：块级命名
- 不要滥用id选择器和 !important
- 按需使用sass等预编译器
- 合理合并与拆分
- BFC明确以及模块区域功能注释


### JS篇
- 注释注释写注释
- 不要写魔鬼数字
- 嵌套不要过深
- 合理抽取组件及函数
- 注意边界条件
- ES2017代码风格

挑一些项目中经常发现一些问题


```    
if (sourceId === 123) {
        ....
    } else if (sourceId === 345) {
        ....
    }
```
诸如此类没有注释、难以理解其代表意义的常量（0、1这种）都称之为魔鬼数字。

也许当时开发你知道这些数字的含义，但当过几个月之后，或者开发人员流动以后，这些东西就会很麻烦。

通常的解决办法是：用一眼就能看懂的常量定义魔鬼数字或者备注明确，如：

```
const BEIJING = 123;
const SHANGHAI = 345
if (sourceId === BEIJING) {
    ....
} else if (sourceId === SHANGHAI) {
    ....
}
```
### 函数相关
#### 一般函数命名
bad Code 从命名无法知道返回值类型
```
function showFriendsList() {....} // 现在问，你知道这个返回的是一个数组，还是一个对象，还是true or false。你能答的上来否？
```
good Code 对于返回true or false的函数，最好以should/is/can/has开头
```
function shouldShowFriendsList() {...}
function isEmpty() {...}
function canCreateDocuments() {...}
function hasLicense() {...}
```
#### 函数传参备注
bad Code 传参无说明

```
getSVG(api, isGet, isSet){// 到底啥意思


  return {}
}; 
```


good Code 对于返回true or false的函数，最好以should/is/can/has开头
```
/**
  * @description: 获得svg
  * @api {string|Array<string>}
  * @isGet {boolean}
  * @isSet {boolean}
  * @return {*}
  * @Date: 2021-08-17 12:21:22
  */
getSVG(api, isGet, isSet){ // true和false啥意思，一目不了然


  return {}
};
```

#### 动作函数要以动词开头
bad Code 无法辨别函数意图
```
function emlU(user) {
	....
}
```
good Code 动词开头，函数意图就很明显
```
function sendEmailToUser(user) {
    ....
}
```




    