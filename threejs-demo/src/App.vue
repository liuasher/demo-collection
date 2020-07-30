<template>
  <div id="app">
    <div>feat:ops</div>
    <div>feat:ops1</div>
    <div>feat:ops2</div>
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
