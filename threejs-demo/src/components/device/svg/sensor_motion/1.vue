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
            d="M393.728 504.9856A230.4 230.4 0 1 1 512 537.6 332.8 332.8 0 0 0 179.2 870.4a25.6 25.6 0 0 1-51.2 0 384.1536 384.1536 0 0 1 265.728-365.4144zM512 486.4a179.2 179.2 0 1 0 0-358.4 179.2 179.2 0 0 0 0 358.4z m384 384a25.6 25.6 0 0 1-51.2 0 331.776 331.776 0 0 0-108.8-246.1696 25.6 25.6 0 0 1 34.4576-37.888A382.976 382.976 0 0 1 896 870.4z" 
            :fill="inOnline ? '#3481cf': '#a7a7a7'" 
            p-id="6558">
          </path>
        </svg>
      </div>
    </div>
    <div :class="{
      'label': true,
      'tranparent': !isBind
    }">
      <div>有人</div>
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
  // border-radius: 4px;
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
