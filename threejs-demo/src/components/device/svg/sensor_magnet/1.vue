<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="block in-shape">
        <div class="left in-shape"></div>
        <div class="right in-shape"></div>
      </div>
    </div>
    <div :class="{
      'label': true,
      'tranparent': !isBind
    }">
      <div>门窗打开</div>
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
  width: 100%;
  height: 100%;
}
// isOnline 改变颜色
// isBind   改变虚实

</style>
