<template>
  <div :class="{
      'isBind': isBind,
      'inOnline': inOnline
    }">
    <div class="shape">
      <div class="in-shape">
        <div class="block">
          <div class="line-1 line"></div>
        </div>
        <div class="line-2 line"></div>
        <div class="block">
          <div class="line-1 line"></div>
        </div>
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
  display: flex;
}
.block{
  width: 1.2vw;
}
.line-1{
  width: 0.6vw;
  height: 2px;
  border-radius: 2px;
  margin-top: 4px;
  margin-left: 0.3vw;
}
.line-2{
  width: 1px;
}

</style>
