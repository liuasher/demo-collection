const files = require.context('./', true, /\.(ts|js)$/);
const configRouters: any[] = [];

files.keys().forEach((key: string) => {
    const reg = /^\.\/index\.(ts|js)$/;
    if (reg.test(key)) {
        return;
    }
    configRouters.push(...files(key).default);
});

export default configRouters;
