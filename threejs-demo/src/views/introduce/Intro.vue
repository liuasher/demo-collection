<template>
  <div class="intro">
    <h1 style="text-align: center;">{{ msg }}</h1>
    <section>
      <h2>一、项目文件结构</h2>
      <pre>
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
      </pre>
    </section>

    <section>
      <h2>二、项目规范说明</h2>
      <section>
        <h3>1、文件夹、文件命名</h3>
        <p>1）文件夹名过长，命名时应使用“-”连接，不推荐驼峰方式。</p>
        <p>2）文件名应使用驼峰命名。</p>
        <p>3）.vue文件命名首字母应使用大写。</p>
        <h3>2、代码规范</h3>
        <p>1）项目使用ESLint的airbnb规范对代码进行检查，
          如果你还不熟悉，请猛击
          <a target="_blank"
            href="https://confluence.aqara.com/pages/viewpage.action?pageId=18071803">代码规范</a>
        </p>
      </section>
    </section>

    <section>
      <h2>三、其他</h2>
      <section>
        <h3>1、国际化使用</h3>
        <pre>
          如：xxx.vue页面文件，{{}}绑定的变量替换为使用当前语言变量，如替换为<code>$t('Home')</code>。
        </pre>
        <h3>2、echarts使用</h3>
        <pre>
          如：xxx.vue页面文件：
           <code>
              ...
              import Chart from '@/vendor/chart';
              ...
              mounted() {
                const option = {
                  xAxis: {
                      type: 'category',
                      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  series: [
                      {
                          data: [820, 932, 901, 934, 1290, 1330, 1320],
                          type: 'line'
                      }
                  ],
                };
                const dom = document.getElementById('chart');
                this.instance = new Chart({ dom });
                this.instance.setOption(option);
            }
            ...
          </code>
        </pre>
        <h3>3、regxp + iview/Element表单验证使用</h3>
        <pre>
          如：xxx.vue页面文件，使用iview/Element表单组件，引入regxp验证对象并配置表单rules属性对象如下：
          <code>
            ...
            &lt;Form :rules="rule"&gt;
            ...
            import { validatePhone } from '@/utils/regxp';
            ...
            data() {
              return {
                rule: {
                  phone: [
                    { required: true, validator: validatePhone, trigger: 'blur' }
                  ],
                },
              }
            }
            ...
          </code>
        </pre>
        <h3>4、请求模块使用</h3>
        <pre>
          如：xxx.vue页面，引入与之对应的module并调用：
          <code>
            ...
            import { logout } from '@/service/module/access';
            ...
            created() {
              logout().then(
                  (res: any) => {
                      console.log(res);
                  },
                  (err: any) => {
                      console.log(err);
                  }
              );
            }
            ...
          </code>
        </pre>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// import { logout } from '../../service/module/access';

export default Vue.extend({
    name: 'introduce',
    data() {
        return {
            msg: '项目介绍'
        };
    },
    created() {
        // logout().then(
        //     (res: any) => {
        //         console.log(res);
        //     },
        //     (err: any) => {
        //         console.log(err);
        //     }
        // );
    }
});
</script>

<style lang="less">
.intro {
    width: 800px;
    margin: 0 auto;
    background-color: #f2f2f2;
}
</style>
