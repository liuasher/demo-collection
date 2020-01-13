import axios from 'axios';

// 可添加LoadingBar, Message等信息，以iview为例
// import { LoadingBar, Message } from 'view-design';

export default {
    get(url: string, params: any, config = {}): Promise<any> {
        let paramStr = '';
        Object.keys(params).forEach((key) => {
            if (params[key] || params[key] === 0 || params[key] === '') {
                paramStr += `${key}=${params[key]}&`;
            }
        });
        if (paramStr !== '') {
            paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'));
            url = `${url}?${paramStr}`;
        }

        return new Promise((resolve) => {
            // LoadingBar.start();
            axios.get(url, config).then(
                (res: any) => {
                    const { data = {} } = res;
                    if (data.code === 0) {
                        // LoadingBar.finish();
                        resolve(data);
                    } else if (data.code === 1403) {
                        // 用户没权限
                        console.log('用户没权限');
                        // LoadingBar.error();
                    } else if (data.code === 1405 || data.code === 1409) {
                        // 1405: 头部token校验失败
                        // 1409: 系统票据无效
                        // LoadingBar.error();
                    } else {
                        // 其他异常
                        // LoadingBar.error();
                    }
                },
                (err: any) => {
                    // 错误信息提示
                    console.error(err);

                    // const msg = err.smg || '服务器繁忙，请稍后再试！';
                    // (Message as any).error({
                    //     content: msg,
                    //     duration: 5
                    // });
                    // LoadingBar.error();
                }
            );
        });
    },

    post(url: string, params: any, config = {}): Promise<any> {
        return new Promise((resolve) => {
            // LoadingBar.start();
            axios.post(url, params, config).then(
                (res: any) => {
                    const { data = {} } = res;
                    if (data.code === 0) {
                        // LoadingBar.finish();
                        resolve(data);
                    } else if (data.code === 1403) {
                        // 用户没权限
                        // LoadingBar.error();
                    } else if (data.code === 1405 || data.code === 1409) {
                        // 1405: 头部token校验失败
                        // 1409: 系统票据无效
                        // LoadingBar.error();
                    } else {
                        // 其他异常处理
                        // LoadingBar.error();
                    }
                },
                (err: any) => {
                    // 错误信息提示
                    console.error(err);

                    // const msg = err.smg || '服务器繁忙，请稍后再试！';
                    // (Message as any).error({
                    //     content: msg,
                    //     duration: 5
                    // });
                    // LoadingBar.error();
                }
            );
        });
    }
};
