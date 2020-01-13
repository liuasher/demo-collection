import { shallowMount } from '@vue/test-utils';
import Introduce from '@/views/introduce/Intro.vue';

describe('Intro.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Introduce, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
