## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project directory

```
| -- public
    | -- index.html 入口html文件

| -- src
    | -- assets 静态资源
    | -- css 样式
    | -- img 图片、icon
    | -- iconfont icon字体
    | -- js 静态js(ts)配置

    | -- components 自定义Vue公共组件

    | -- directives Vue指令
    | -- index.js/index.ts 配置文件

    | -- filters  Vue过滤器
    | -- index.js/index.ts 配置文件

    | -- locale 国际化(需初始化项目时选择注入)
    | -- lang 项目语言变量包(默认中英文)
        | -- en-US.js/en-US.ts
        | -- zh-CN.js/zh-CN.ts
    | -- index.js/index.ts 配置文件

    | -- mixin Vue混入

    | -- router  Vue-Router配置
    | -- module 路由模块
        | -- xxx xxx模块路由
        | -- xxx.js/xxx.ts 
        | -- index.js/index.ts 自动获取各模块路由
    | -- index.js/index.ts 路由配置文件

    | -- service Http服务
    | -- api 项目请求接口
        | -- xxx.js/xxx.ts
    | -- module 项目请求模块
        | -- xxx.js/xxx.ts
    | -- utils 请求模块插件
        | -- ajax.js/ajax.ts 请求封装
        | -- jsonp.js/jsonp.ts jsonp跨域
        | -- download.js/download.ts 文件下载
    | -- config.js/config.ts 请求域名配置
    | -- interceptor.js/interceptor.ts 项目拦截器(路由 + 接口)          

    | -- store Vuex配置
    | -- module store模块
    | -- index.js/index.ts store配置文件          

    | -- types TS类型声明(初始化项目选择语言类型会注入)
    | -- shims-lib.d.ts 项目插件声明
    | -- shims-tsx.d.ts Vue使用tsx语法声明
    | -- shims-vue.d.ts Vue生态插件语法声明
    | -- vue-prototype.d.ts 项目自定义Vue属性声明

    | -- utils 项目插件
    | -- ajax 原生ajax请求
        | -- index.js/index.ts
        | -- xhr.js/xhr.ts
    | -- base64ToFile.js/base64ToFile.ts base64字符串转文件流
    | -- echartsTooltipCarousel.js/echartsTooltipCarousel.ts Echart自动轮播插件
    | -- regxp.js/regxp.ts 表单验证(async-validator)的常用validator配置
    | -- deepMerge.js/deepMerge.ts 深合并对象
    | -- compare.js/compare.ts 对象数组排序compare
    | -- urlToBase64.js/urlToBase64.ts 图片url转base64字符串

    | -- vendor 第三方插件
    | -- chart.js/chart.ts echarts配置(初始化项目选择注入)
    | -- iview.js/iview.ts/element.js/element.ts iview/element按需引入配置(初始化项目选择UI类型注入)

    | -- views 项目页面
    | -- xxx页面
        | -- xxx.vue

    | -- App.vue 视图主入口

    | -- main.js/main.ts 项目主入口文件

| -- tests 项目单元测试文件

| -- .browserslistrc 项目目标浏览器的范围

| --  .editorconfig 编译器配置(vscode)

| --  .eslintignore eslint代码检查忽略

| --  .eslintrc.js eslint代码检查配置

| --  .gitignore git提交忽略

| --  babel.config.js 项目babel转码配置

| --  jest.config.js 项目单元测试配置

| --  package.json 项目依赖

| --  tsconfig.json 项目ts代码编译配置(仅ts项目)

| --  vue.config.js 项目webpack配置
```
