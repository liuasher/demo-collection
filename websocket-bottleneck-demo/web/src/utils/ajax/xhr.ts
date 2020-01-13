// more details: https://github.com/ElemeFE/element/blob/dev/packages/upload/src/ajax.js

// 引用Object.prototype属性
const has = Object.prototype.hasOwnProperty;

const hasOwn = function hasOwnProperty(obj: any, key: string) {
    return has.call(obj, key);
};

function getError(action: string, xhr: any) {
    const msg = `fail to post ${action} ${xhr.status}'`;
    const err: any = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = action;
    return err;
}

function getBody(xhr: any) {
    const text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

export default function request(option: any) {
    if (typeof XMLHttpRequest === 'undefined') {
        return;
    }

    const xhr = new XMLHttpRequest();
    const { action } = option;

    xhr.onerror = function error(e) {
        option.onError(e);
    };

    xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getError(action, xhr), getBody(xhr));
        }

        option.onSuccess(getBody(xhr));
        return true;
    };

    xhr.open('post', action, true);

    // set the request header
    const headers = option.headers || {};
    for (const item in headers) {
        if (hasOwn(headers, item) && headers[item] !== null) {
            xhr.setRequestHeader(item, headers[item]);
        }
    }

    if (option.data) {
        if (Object.prototype.toString.call(option.data) === '[object File]') {
            // file data type
            // 上传图片接口数据格式应为formData
            const formData = new FormData();
            formData.append('file', option.data);
            xhr.send(formData);
        } else {
            // json data type
            // 非上传图片接口为json格式
            xhr.send(JSON.stringify(option.data));
        }
    }
}
