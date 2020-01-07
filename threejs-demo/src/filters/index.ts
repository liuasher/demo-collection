// 过滤器
export const discount = (val: number) => (
    val === 100 ? '原价' : `${Math.round(val) / 10}折`
);
