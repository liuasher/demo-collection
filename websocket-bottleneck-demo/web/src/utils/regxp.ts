// iview、element表单验证(async-validator)的validator

interface CB {
    (err?: Error): void;
}

/**
 * 手机号验证validator
 * 大陆手机号码11位数,1开头排除10，12，+后9位任意数
 * 香港手机号码8位数，5|6|8|9开头+7位任意数
 * @param rule async-validator的rule
 * @param value 被验证的值
 * @param callback 验证回调
 */
export const validatePhone = (rule: any, value: string, callback: CB) => {
    const reg = /(^[1][3,4,5,6,7,8,9][0-9]{9}$)|(^(5|6|8|9)\d{7}$)/;
    if (rule.required && !value) {
        callback(new Error('手机号不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('手机号格式错误'));
    } else {
        callback();
    }
};

// 固定电话自定义验证规则
export const validateFixedTelephoneNumber = (rule: any, value: string, callback: CB) => {
    const reg = /^\d{3}(-|\+)\d{7,8}|^\d{4}(-|\+)\d{7,8}$|^\d{7,8}$/;
    if (rule.required && !value) {
        callback(new Error('电话号码不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('固定电话号码格式错误'));
    } else {
        callback();
    }
};

// 身份证号 15位或18位
export const validateIdNum = (rule: any, value: string, callback: CB) => {
    const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
    if (rule.required && !value) {
        callback(new Error('身份证号不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('身份证号格式错误'));
    } else {
        callback();
    }
};

// 微信号 
// 一位大写或小写字母开头，后面可以连接5到19位-或_或小写字母或大写字母或数字
export const validateWeChat = (rule: any, value: string, callback: CB) => {
    const reg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
    if (rule.required && !value) {
        callback(new Error('微信号不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('微信号格式错误'));
    } else {
        callback();
    }
};

// 米聊号  
// 一位大写或小写字母开头，后面可以连接5到19位-或_或小写字母或大写字母或数字
export const validateMiChat = (rule: any, value: string, callback: CB) => {
    const reg = /^[-_a-zA-Z0-9]{1,19}$/;
    if (rule.required && !value) {
        callback(new Error('米聊号不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('米聊号格式错误'));
    } else {
        callback();
    }
};

// 邮箱验证规则
export const validateEmial = (rule: any, value: string, callback: CB) => {
    const reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (rule.required && !value) {
        callback(new Error('邮箱不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('邮箱格式错误'));
    } else {
        callback();
    }
};

// 金额自定义验证规则
export const validatePrice = (rule: any, value: string, callback: CB) => {
    const reg = /(^[1-9]\d{0,7}(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
    if (rule.required && !value) {
        callback(new Error('金额不能为空'));
    } else if (value && !reg.test(value)) {
        callback(new Error('请输入0或8位正数，保留0~2位小数'));
    } else {
        callback();
    }
};
