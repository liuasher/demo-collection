<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="in-shape">
        <svg 
          t="1579405526265" class="svg" 
          viewBox="0 0 1024 1024" version="1.1" 
          xmlns="http://www.w3.org/2000/svg" p-id="5059" 
          width="34" height="34">
          <path
            :fill="inOnline ? '#3481cf': '#a7a7a7'" 
            d="M480 712.64V352.064a32 32 0 1 1 64 0V712.64a64 64 0 1 1-64 0z m160-104.576a32 32 0 1 1 0-64v-32a32 32 0 1 1 0-64v-32a32 32 0 0 1 0-64v-8.96a124.16 124.16 0 0 0-130.56-119.04 120 120 0 0 0-125.44 119.04v8.96a32 32 0 1 1 0 64v32a32 32 0 1 1 0 64v32a32 32 0 0 1 0 64v96a96 96 0 1 1-192 0v-32a32 32 0 0 1 64 0v32a32 32 0 1 0 64 0v-360.96a182.72 182.72 0 0 1 187.84-183.04H512a187.2 187.2 0 0 1 192 183.04v360.96a32 32 0 1 0 64 0v-32a32 32 0 0 1 64 0v32a96 96 0 1 1-192 0v-96z m160-32a32 32 0 0 1-32-32v-192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32z m-576 0a32 32 0 0 1-32-32v-192a32 32 0 1 1 64 0v192a32 32 0 0 1-32 32z" p-id="5060">
          </path>
        </svg>
      </div>
    </div>
    <div :class="{
      'label': true,
      'tranparent': !isBind
    }">
      <div>温度：26℃</div>
      <div>湿度：20%</div>
      <div>气压：1025hPa</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'introduce',
    props: {
      inOnline: Boolean,
      isBind: Boolean,
    },
    computed: {

    },
});
</script>

<style lang="less" scoped>

.shape{
  border-radius: 4px;
  width: 2.4vw;
  height: 2.9vw;
}
.in-shape{
  // border-radius: 5px;
  border-left: 0;
  border-right: 0;
  width: 2.4vw;
  height: 2.3vw;
  margin-top: 0.2vw;
  // margin-left: 0.2vw;
  position: relative;
}
.line{
  width: 1.7vw;
  height: 2px;
  border-radius: 2px;
  margin-top: 4px;
  margin-left: 0.3vw;
}

.svg{
  position: absolute;
  width: 100%;
  height: 100%;
}
// isOnline 改变颜色
// isBind   改变虚实


</style>
