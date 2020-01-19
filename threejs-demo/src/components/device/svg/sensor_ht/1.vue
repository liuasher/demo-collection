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
            d="M640 625.6V192c0-70.6-57.4-128-128-128s-128 57.4-128 128v433.6c-40.2 36.1-64 87.9-64 142.4 0 105.9 86.1 192 192 192s192-86.1 192-192c0-54.6-23.8-106.4-64-142.4zM512 896c-70.7 0-128-57.3-128-128 0-47.3 25.9-88.1 64-110.3V544h32v-32h-32v-64h64v-32h-64v-64h32v-32h-32v-64h64v-32h-64v-32c0-35.4 28.6-64 64-64 35.3 0 64 28.6 64 64v465.7c38.1 22.2 64 63 64 110.3 0 70.7-57.3 128-128 128z" p-id="5060">
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
