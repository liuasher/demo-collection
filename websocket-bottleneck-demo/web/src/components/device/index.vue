<template>
  <div 
    :class="{
      css0: device.css,
      css1: !device.css,
      ac: true,
      device: true
    }">
    <div>{{ device.serviceId }}</div> 
    <div>{{ status.temperature }}℃ </div>
    <div>{{ status.modeLabel }} {{ status.windSpeedLabel }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Device',
  props: {
    device: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
 
    };
  },
  computed: {
    status() {
      const code = this.device.attrValues[0].value;
      return this.getAcCode(code);
    }
  },
  mounted() {
   
  },
  methods: {
    getAcCode(unitValue) {
				// 将空调unitValue转换成开关状态、温度、模式、风速、扫风
				let hexValue = parseInt(unitValue, 10).toString(16);
				const len = hexValue.length;
				if (len < 8) {
					for (let i = 0; i < 8 - len; i += 1) {
						hexValue = `0${hexValue}`;
					}
				}
				hexValue = hexValue.replace(/\s/g, '0');
				const switchStatus = parseInt(hexValue.substring(0, 1), 16);
				// 开关状态 0: off; 1: on; 2: toggle; E: circle; F: invalid; else: reserve
				const modeStatus = parseInt(hexValue.substring(1, 2), 16);
				let modeLabel;
				switch (modeStatus) {
					case 0:
						modeLabel = '制热';
						break;
					case 1:
						modeLabel = '制冷';
						break;
					case 2:
						modeLabel = '自动';
						break;
					case 3:
						modeLabel = '除湿';
						break;
					case 4:
						modeLabel = '送风';
						break;
					case 'E':
						modeLabel = '循环';
						break;
					default:
						break;
				}
				// 模式（制冷，制热，除湿，自动，送风）0: heat; 1: cool; 2: auto; 3: dry; 4: wind; E: circle; F: invalid; else: reserve
				const windSpeed = parseInt(hexValue.substring(2, 3), 16);
				let windSpeedLabel;
				switch (windSpeed) {
					case 0:
						windSpeedLabel = '低风';
						break;
					case 1:
						windSpeedLabel = '中风';
						break;
					case 2:
						windSpeedLabel = '高风';
						break;
					case 3:
						windSpeedLabel = '自动';
						break;
					case 'E':
						windSpeedLabel = '循环';
						break;
					default:
						break;
				}
				// 风速(高中低，自动)0: low; 1: middle; 2: high; 3: auto; E: circle; F: invalid; else: reserve
				const windInt = parseInt(hexValue.substring(3, 4), 16);
				const windDirect = windInt > 7 ? windInt / 4 : 0;
				// 风向 0: horizontal; 1: vertical; 2: circle; 3: invalid;
				const windSweep = windInt % 4;
				// 扫风（扫风|不扫风）0: swing; 1: fix; 2: circle; 3: invalid;
				const temperature = parseInt(
					hexValue.substring(4, 5) + hexValue.substring(5, 6),
					16
				); // 温度
				return {
					switchStatus,
					modeStatus,
					modeLabel,
					windSpeed,
					windSpeedLabel,
					windDirect,
					windSweep,
					temperature
				};
    }
  },
});
</script>

<style lang="less">
.device{
  border: solid 1px #333;
  width: 3.5rem;
  padding: 4px;
  // height: 3rem;
  margin: 4px;
  font-size: 10px;
}


.css0{
  background: #f7b5ab;
  animation: background 20ms ease-in-out;
}
.css1{
  background: #f0fff0;
  animation: background 20ms ease-in-out;
}
</style>
