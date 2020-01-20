<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <svg t="1579426621744" class="bg-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12646" width="40" height="40">
        <path 
          d="M995.104 74.048l-440.064 440.256 427.872 430.848c16.352 16.448 19.744 39.712 7.616 51.968s-35.232 8.8-51.584-7.648l-428.032-430.976-436.48 436.672c-16.544 16.544-39.936 19.968-52.224 7.68s-8.864-35.68 7.68-52.224l436.64-436.8-437.216-440.256c-16.352-16.448-19.744-39.712-7.616-51.968s35.264-8.832 51.584 7.648l437.376 440.384 439.904-440.096c16.544-16.544 39.936-19.968 52.224-7.68s8.864 35.68-7.68 52.224z" 
          :fill="inOnline ? '#3481cf': '#a7a7a7'"
          p-id="12647">
          </path>
        </svg>
      <div class="block in-shape">
        <svg t="1579426621744" class="bg-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12646" width="40" height="40">
          <path 
            :fill="inOnline ? '#3481cf': '#a7a7a7'"
            d="M519.552 256a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0V288a32 32 0 0 0-32-32zM348.384 520.32a32 32 0 1 0-56.768 29.568l72.32 136.896a32 32 0 1 0 56.768-29.568l-72.32-136.896zM727.104 506.72a32 32 0 0 0-43.168 13.6l-72.32 136.896a32 32 0 1 0 56.768 29.568l72.32-136.896a32 32 0 0 0-13.6-43.168z" p-id="13329">
          </path>
        </svg>
      </div>
    </div>
    <!-- <div :class="{
      'label': true,
      'tranparent': !isBind
    }">
      <div>门窗打开</div>
    </div> -->
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
  width: 2.9vw;
  height: 2.9vw;
  position: relative;
}
.block{
  border-radius: 4px;
  // border-left: 0;
  // border-right: 0;
  // border: 0;
  background: #fff;
  width: 2.3vw;
  height: 2.3vw;
  margin-top: 0.2vw;
  margin-left: 0.2vw;
  position: relative;
  display: flex;
}

.bg-svg{
  position: absolute;
  width: 100%;
  height: 100%;
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
