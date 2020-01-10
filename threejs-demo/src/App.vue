<template>
  <div id="threejs-scene" class="intro" ref="threejs">
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as THREE from 'three';

export default Vue.extend({
    name: 'introduce',
    data() {
        return {
            msg: '项目介绍'
        };
    },
    mounted() {
			// 创建Scene
			const scene = new THREE.Scene();
			// 创建Camera
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			// 创建Renderer
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			
			/**
			 * PerspectiveCamera
			 * 1.第一个参数是视野，
			 */


			// const geometry = new THREE.BoxGeometry(1, 1, 1);
			// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			// const cube = new THREE.Mesh(geometry, material);
			// scene.add(cube);

			// camera.position.z = 5;

			// const animate = function animate() {
			// 	requestAnimationFrame(animate);

			// 	cube.rotation.x += 0.01;
			// 	cube.rotation.y += 0.01;

			// 	renderer.render(scene, camera);
			// };

			// animate();
    },
    methods: {
      init() {
		
			},
    },
});
</script>

<style lang="less">

</style>
