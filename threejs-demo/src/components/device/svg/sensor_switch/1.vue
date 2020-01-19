<template>
  <div 
    :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="in-shape">
        <div class="line"></div>
      </div>
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
  border-radius: 2px;
  width: 2.9vw;
  height: 2.9vw;
}
.in-shape{
  border-radius: 2px;
  width: 2.3vw;
  height: 2.3vw;
  margin-top: 0.2vw;
  margin-left: 0.2vw;
}
.line{
  width: 1.7vw;
  height: 2px;
  border-radius: 2px;
  margin-top: 4px;
  margin-left: 0.3vw;
}

// isOnline 改变颜色
// isBind   改变虚实


</style>
