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
			// 创建Scene
			const scene = new THREE.Scene();
			// 创建Camera
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
			camera.position.set(4, 0, 10);
			camera.lookAt(0, 0, 0);
			// 创建Renderer
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			
			/**
			 * PerspectiveCamera
			 * 1.第一个参数是视野，
			 */

			// 创建几何 
			const geometry = new THREE.BoxGeometry(3, 3, 3);
			// 创建材质
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

			
			// 创建啮合，即将几何与材质结合起来。它能够被置入场景，并且自由移动
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);
			

			// 创建渲染loop，每秒60次渲染
			const animate = function animate() {
				// 类似于settimeout
				requestAnimationFrame(animate);

					// cube.rotation.x += 0.01;
					// cube.rotation.y += 0.01;
					// cube.rotation.z += 0.01;
				renderer.render(scene, camera);
			};

			animate();
    },
    methods: {
      init() {
		
			},
    },
});
</script>

<style lang="less">

</style>
