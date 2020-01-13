// 自定义指令
export const demo = {
    name: 'demo',
    handler(el: HTMLElement, binding: any, vnode: any) {
        const s = JSON.stringify;
        el.innerHTML = `
            name:${s(binding.name)}<br>
            value:${s(binding.value)}<br>
            expression:${s(binding.expression)}<br>
            argument:${s(binding.arg)}<br>
            modifiers:${s(binding.modifiers)}<br>
            vnode keys:${Object.keys(vnode).join(', ')}<br>
        `;
    },
};
