/**
 * 按对象数组某属性值对数组进行排序的比较函数
 * @param prop 排序属性
 * @param type 排序类型，1为升序，-1为降序
 */
const compare = function compareByProp(prop: string, type = 1) {
    return function compareBack(a: any, b: any) {
        const val1 = a[prop];
        const val2 = b[prop];
        if (type === -1) {
            return val2 - val1;
        }
        return val1 - val2;
    };
};

export default compare;
