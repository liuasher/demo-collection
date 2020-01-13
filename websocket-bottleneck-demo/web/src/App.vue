<template>
  <div class="block container">
    <div class="block output">
			<device 
				v-for="device in deviceLists" 
				:key="device.serviceId"
				:device="device"/>
		</div>

		<!-- <div class="block input">
			<div>
				<span>推送间隔({{pause}}毫秒)：</span><input v-model="pause"/>
			</div>
			<div class="ajax-result">
				<button @click="init">保存</button>
				保存成功
			</div>
		</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as THREE from 'three';
import Device from './components/device/index.vue';
import ACDevice from './utils/device/index';
import post from './utils/ajax/index';

const W3CWebSocket = require('websocket').w3cwebsocket;

export default Vue.extend({
    name: 'introduce',
		components: {
			Device
		},
    data() {
        return {
						pause: 2000,
						count: 1000,
						deviceLists: []
        };
    },
    mounted() {
			// 推送消息
			const client = new W3CWebSocket('ws://10.0.25.181:3200/', 'echo-protocol');
			client.onmessage = ({ data }) => {
				const refresh = () => {
					const result = JSON.parse(data);
					for (let index = 1; index <= this.deviceLists.length; index += 1) {
						if (this.deviceLists[index].serviceId === result.serviceId) {
							const css = 0;
							if (this.deviceLists[index].css !== undefined) {
								const { css: c } = this.deviceLists[index];
							}
							// this.deviceLists[index] = {
							// 	...result,
							// 	css: css + 1
							// };
							this.$set(this.deviceLists, index, {
								...result,
								css: (css + 1) % 2
							});
							console.log(result.serviceId);
							return;
						}
					}
				};
				requestAnimationFrame(refresh);
				refresh();
			};

			// 查询设备
			post('http://10.0.25.181:3200/getDevice', JSON.stringify({})).then((res) => {
				this.deviceLists = res.result;
			});


			// const animate = function animate() {
			// 	requestAnimationFrame(animate);
			// };
			
			// animate();
    },
    methods: {
      init() {
				post('http://10.0.25.181:3200/setInfo', JSON.stringify({
					pause: this.pause,
					count: this.count
				})).then((res) => {
					// console.log(123, res);
				});
			},
			
    },
});
</script>

<style lang="less">
	.block{
		border: solid 1px #dadada;
		margin: 4px;
	}
	.container{
		height: 100%;
		width: 100%;
		position: relative;
	}
	.output{
		height: 95vh;
		overflow-y: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.input{
		padding: 14px;
		font-size: 14px;
		color: #777;
		display: flex;
		justify-content: space-between;
	}
	.ajax-result{
		width: 200px;
		color: #333;
		font-weight: bolder;
		text-align: right
	}
</style>
