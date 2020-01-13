import Vue from 'vue';
import Loading from './loading.vue';

Loading.newInstance = (properties: any) => {
  const _props = properties || {};

  const Instance = new Vue({
    data: _props,
    render(h) {
      return h(Loading, {
        props: _props,
      });
    },
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const loading_bar = Instance.$children[0];

  return {
    update(options: any) {
      if ('percent' in options) {
        loading_bar.percent = options.percent;
      }
      if (options.status) {
        loading_bar.status = options.status;
      }
      if ('show' in options) {
        loading_bar.show = options.show;
      }
    },
    component: loading_bar,
    destroy() {
      document.body.removeChild(document.getElementsByClassName('lv-loading-bar')[0]);
    },
  };
};

export default Loading;
