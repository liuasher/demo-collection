<template>
  <div id="app">
    <div>feat:ops</div>
    <div>feat:ops1</div>
    <div>feat:ops2</div>
    <div>feat:ops3</div>
    <div>feat:ops4</div>
    <div>feat:ops5</div>
    <div>feat:ops6</div>
    <div>feat:hotel</div>
    <div>feat:hote2</div>
    <div>feat:iiap</div>
    <div>feat:iiap2</div>
    <div>feat:bugfix</div>
    <router-link :to="{ name: 'Page1' }"> page1 </router-link>
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "introduce"
});
</script>
