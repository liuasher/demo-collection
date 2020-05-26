<template>
    <div id="app">

        <router-link :to="{name: 'Page1'}"> page1 </router-link>
        <router-view>

        </router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'introduce',
});
</script>
