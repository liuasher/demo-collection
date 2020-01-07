// 引用Object.prototype属性
const has = Object.prototype.hasOwnProperty;

const hasOwn = function hasOwnProperty(obj: any, key: string) {
  return has.call(obj, key);
};

/**
 * 合并目标对象的属性值
 * 未被合并的属性值使用目标对象默认值
 * @param target {object} 目标对象
 * @param init {object} 合并属性值对象
 * @returns {object} 合并属性值后的新对象
 */
const mergeDeep = function mergePropsDeep(
  target: ObjProps.Key,
  init: ObjProps.Key,
): any {
  if (typeof init !== 'object') {
    return target;
  }

  const cloneObj: ObjProps.Key = {};
  let cloneInit: ObjProps.Key = init;
  if (target && typeof target === 'object') {
    for (const key in target) {
      if (hasOwn(target, key)) {
        if (target[key] && typeof target[key] === 'object') {
          // Array类型，直接赋值
          if (Array.isArray(target[key])) {
            cloneObj[key] = hasOwn(init, key) ? init[key] : target[key];
          } else {
            cloneInit = init[key] || {};
            cloneObj[key] = mergePropsDeep(target[key], cloneInit);
          }
        } else {
          cloneObj[key] = hasOwn(init, key) ? init[key] : target[key];
        }
      }
    }
  }
  return cloneObj;
};

export default mergeDeep;
