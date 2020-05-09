// 拦截器
import axios from 'axios';
import { localHost, testEnv } from './config';

// 路由跳转拦截
const routerInterceptor = function routerJumpInterceptor(router: any) {
    router.beforeEach((to: any, from: any, next: any) => {
        // Add your code

        next();
    });
};

// 请求拦截
const requestInterceptor = function httpRequestInterceptor() {
    // 开发环境和线上环境切换
    axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? testEnv : localHost;

    // Add your code

    // 请求拦截
    axios.interceptors.request.use(
        (config: any) => {
            // Add your code
            console.log(config);
            return config;
        },
        (error: any) => Promise.reject(error)
    );

    // 响应拦截
    axios.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            // Add your code
            console.log(error);
            Promise.reject(error);
        }
    );
};

// 项目拦截器
const interceptor = function combineProjectInterceptor(router: any) {
    routerInterceptor(router);
    requestInterceptor();
};

export default interceptor;
