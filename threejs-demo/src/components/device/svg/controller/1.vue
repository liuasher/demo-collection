<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="block in-shape">
        <svg t="1579419640313" class="svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11201" width="40" height="40">
         
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
}
.block{
  // border-radius: 4px;
  // border-left: 0;
  // border-right: 0;
  // border: 0;
  width: 2.3vw;
  height: 2.3vw;
  border-radius: 4px;
  margin-top: 0.2vw;
  margin-left: 0.2vw;
  position: relative;
  display: flex;
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
  width: 98%;
  height: 100%;
}
// isOnline 改变颜色
// isBind   改变虚实

</style>
