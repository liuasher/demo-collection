<template>
  <div id="threejs-scene" class="intro" ref="threejs">
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as THREE from 'three';
import { WEBGL } from 'three/examples/jsm/WebGL.js';

export default Vue.extend({
    name: 'introduce',
    data() {
        return {
            msg: '项目介绍'
        };
    },
    mounted() {
			const texture = new THREE.TextureLoader().load('./asstes/img/aqara.png');
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(4, 4);
    },
    methods: {
      init() {
		
			},
    },
});
</script>

<style lang="less">

</style>
