const trim = function strTrim(str: string) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};

/**
 * 获取图片的base64路径
 * @param img image对象
 * @returns base64格式url
 */
const getBase64Url = function getBase64UrlByImgUrl(img: any) {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const dataURL = canvas.toDataURL();
    // 释放canvas，减少性能开销
    canvas = null;
    return dataURL;
};

/**
 * 图片的url路径装换为base64路径
 * @param url 图片url
 * @param callback 转换后回调
 * @param format 图片格式化对象
 * {
 *   isFormat?: boolean 是否格式化
 *   maxWidth?: number 最大宽限制
 *   maxHeight?: number 最大高限制
 * }
 */
const toBase64Url = function urlToBase64Url(url: string, callback: Function, format: any = {}) {
    if (trim(url).length === 0) {
        callback('');
    }

    const image = new Image();
    image.src = `${url}?v=${new Date().getTime()}`;
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
        const isFormat: boolean =
            Object.prototype.toString.call(format.isFormat) === '[object Boolean]'
                ? format.isFormat
                : false;
        const maxWidth: number = Number(format.maxWidth) || 0;
        const maxHeight: number = Number(format.maxHeight) || 0;
        let targetW: number;
        let targetH: number;

        // 图片对象大小格式化
        if (isFormat && maxWidth && maxHeight) {
            if (image.width < maxWidth && image.height < maxHeight) {
                targetW = image.width;
                targetH = image.height;
            } else if (maxWidth / maxHeight <= image.width / image.height) {
                targetW = maxWidth;
                targetH = maxWidth * (image.height / image.width);
            } else {
                targetW = maxHeight * (image.width / image.height);
                targetH = maxHeight;
            }
            image.width = targetW;
            image.height = targetH;
        }

        const base64Src = getBase64Url(image);
        callback(base64Src, image.width, image.height);
    };

    image.onerror = () => {
        callback('');
    };
};

export default toBase64Url;
