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
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
			camera.position.set(0, 0, 100);
			camera.lookAt(0, 0, 0);

			const scene = new THREE.Scene();

			const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
			const geometry = new THREE.Geometry();
			geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
			geometry.vertices.push(new THREE.Vector3(0, 10, 0));
			geometry.vertices.push(new THREE.Vector3(10, 0, 0));

			const line = new THREE.Line(geometry, material);
			scene.add(line);
			renderer.render(scene, camera);
    },
    methods: {
      init() {
		
			},
    },
});
</script>

<style lang="less">

</style>
