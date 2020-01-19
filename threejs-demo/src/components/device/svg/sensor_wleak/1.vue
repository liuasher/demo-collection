<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="block in-shape">
        <svg 
          t="1579405526265" class="svg" 
          viewBox="0 0 1024 1024" version="1.1" 
          xmlns="http://www.w3.org/2000/svg" p-id="5059" 
          width="44" height="40">
          <path 
            d="M535.32 23.85C525.06 8 498.94 8 488.68 23.85 476 43.34 178.4 503.29 178.4 678.4 178.4 862.36 328 1012 512 1012s333.6-149.64 333.6-333.6c0-175.11-297.6-635.06-310.28-654.55zM512 956.4c-153.28 0-278-124.72-278-278 0-120.86 183-436.79 278-587.74 95 150.95 278 466.87 278 587.74 0 153.28-124.72 278-278 278z" p-id="10139" 
            :fill="inOnline ? '#3481cf': '#a7a7a7'" ></path>
          <path 
            d="M706.6 650.6a27.78 27.78 0 0 0-27.8 27.8c0 92-74.82 166.8-166.8 166.8a27.8 27.8 0 0 0 0 55.6c122.63 0 222.4-99.77 222.4-222.4a27.78 27.78 0 0 0-27.8-27.8z" p-id="10140" 
           :fill="inOnline ? '#3481cf': '#a7a7a7'" ></path>
        </svg>
      </div>
    </div>
    <div :class="{
      'label': true,
      'tranparent': !isBind
    }">
      <div>漏水</div>
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
.block{
  // border-radius: 4px;
  border-left: 0;
  border-right: 0;
  width: 2.4vw;
  height: 2.3vw;
  margin-top: 0.2vw;
  position: relative;
  display: flex;
}
.left{
  width: .8vw;
  height: 1.7vw;
  margin-left: 0.3vw;
  margin-top: 0.2vw;
  border-radius: 4px;
}
.right{
  width: 0.5vw;
  height: 1vw;
  margin-left: 0.2vw;
  margin-top: 0.6vw;
  border-radius: 4px;
}

// .line{
//   width: 1.7vw;
//   height: 2px;
//   border-radius: 2px;
//   margin-top: 4px;
//   margin-left: 0.3vw;
// }

.svg{
  position: absolute;
  width: 90%;
  height: 90%;
  margin-top: 5%;
  margin-left: 5%;
}
// isOnline 改变颜色
// isBind   改变虚实

</style>
