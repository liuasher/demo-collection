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

          <path d="M471.3 63.9H86.2c-12.7 0-22.9 10.3-22.9 22.9v385.1c0 12.7 10.3 22.9 22.9 22.9h385.1c12.7 0 22.9-10.3 22.9-22.9V86.8c0-12.6-10.3-22.9-22.9-22.9zM448.4 449H109.1V109.7h339.3V449z" :fill="inOnline ? '#3481cf': '#a7a7a7'"  p-id="7372"></path>

          <path d="M471.3 531.2H86.2c-12.7 0-22.9 10.3-22.9 22.9v385.1c0 12.7 10.3 22.9 22.9 22.9h385.1c12.7 0 22.9-10.3 22.9-22.9V554.1c0-12.7-10.3-22.9-22.9-22.9z m-22.9 385.1H109.1V577h339.3v339.3z" :fill="inOnline ? '#3481cf': '#a7a7a7'"  p-id="7374"></path>
         
          <path d="M937.8 531.2H552.7c-12.7 0-22.9 10.3-22.9 22.9v385.1c0 12.7 10.3 22.9 22.9 22.9h385.1c12.7 0 22.9-10.3 22.9-22.9V554.1c0.1-12.7-10.2-22.9-22.9-22.9z m-22.9 385.1H575.6V577h339.3v339.3z" :fill="inOnline ? '#3481cf': '#a7a7a7'"  p-id="7376"></path>
          
          <path d="M937.8 63.9H552.7c-12.7 0-22.9 10.3-22.9 22.9v385.1c0 12.7 10.3 22.9 22.9 22.9h385.1c12.7 0 22.9-10.3 22.9-22.9V86.8c0.1-12.6-10.2-22.9-22.9-22.9zM914.9 449H575.6V109.7h339.3V449z" :fill="inOnline ? '#3481cf': '#a7a7a7'"  p-id="7378"></path>
        
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
  width: 2.9vw;
  height: 2.9vw;
}
.in-shape{
  border-radius: 5px;
  // border-left: 0;
  // border-right: 0;
  width: 2.3vw;
  height: 2.3vw;
  margin-top: 0.2vw;
  margin-left: 0.2vw;
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
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 20%;
}
// isOnline 改变颜色
// isBind   改变虚实


</style>
