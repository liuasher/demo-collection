/**
 * 将base64格式的数据转换为file对象
 * @param base64Code base64格式的数据
 * @param prefixName 转换文件名称前缀名
 * @returns {file object} 转换的file对象
 */
const base64ToFile = function convertBase64CodeToFile(
    base64Code: string,
    prefixName: string | number
) {
    const arr = base64Code.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = window.atob(arr[1]);
    const extensionName = mime.split('/')[1];
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n >= 0) {
        u8arr[n] = bstr.charCodeAt(n);
        n -= 1;
    }
    return new File([u8arr], `${prefixName}.${extensionName}`, { type: mime });
};

export default base64ToFile;
