<template>
  <div class="container">
    <div class="title">device_lists</div>
		<!-- 无线开关 -->
		<sensor-switch/>
		<!-- 温湿度传感器 -->
		<sensor-ht/>
    <!-- 温湿度气压传感器 -->
    <weather/>
    <!-- 人体传感器 -->
    <sensor-motion/>
    <!-- 门窗传感器 -->
    <sensor-magnet/>
    <!-- 水浸传感器 -->
    <sensor-wleak/>
    <!-- 光照传感器 -->
    <sen-ill/>
    <!-- 魔方控制器 -->
    <sensor-cube/>
    <!-- 网关 -->
    <gateway/>
    <!-- 墙壁开关 -->
    <ctrl-ln/>
    <!-- 墙体插座 -->
    <Plug/>
    <!-- 智能窗帘 -->
    <Curtain/>
    <!-- LED灯泡 -->
    <Light/>
    <!-- 智能面板 -->
    <Controller/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SensorSwitch from '@/components/device/sensor_switch.vue';
import SensorHt from '@/components/device/sensor_ht.vue';
import Weather from '@/components/device/weather.vue';
import SensorMotion from '@/components/device/sensor_motion.vue';
import SensorMagnet from '@/components/device/sensor_magnet.vue';
import SensorWleak from '@/components/device/sensor_wleak.vue';
import SenIll from '@/components/device/sen_ill.vue';
import SensorCube from '@/components/device/sensor_cube.vue';
import Gateway from '@/components/device/gateway.vue';
import CtrlLn from '@/components/device/ctrl_ln.vue';
import Plug from '@/components/device/plug.vue';
import Curtain from '@/components/device/curtain.vue';
import Light from '@/components/device/light.vue';
import Controller from '@/components/device/controller.vue';


export default Vue.extend({
    name: 'introduce',
    data() {
        return {
            msg: '项目介绍'
        };
		},
		components: { 
			SensorSwitch,
      SensorHt,
      Weather,
      SensorMotion,
      SensorMagnet,
      SensorWleak,
      SenIll,
      SensorCube,
      Gateway,
      CtrlLn,
      Plug,
      Curtain,
      Light,
      Controller
		},
    mounted() {
		
    },
    methods: {
      init() {
		
			},
    },
});
</script>

<style lang="less">
.container{
	.title{
		font-size: 2vw;
		padding-bottom: 10px;
		
	}
	font-family:  "Microsoft YaHei"; 
	font-weight:  300;
	margin: 10vh 20vw;
	border: solid 1px #dbdbdb;
	border-radius: 4px;
	padding: 20px;
}


// 设备
.shape{
  border: dashed 0.1vw #a7a7a7;
	background: #fff;
	// position: absolute;
  // transform: translate(50%, 50%);
  // right: 50%;
  // bottom: 50%;
  margin: 0 auto;
  margin-top: 10px;
}
.in-shape{
  border: dashed 0.1vw #a7a7a7;
  
}
.line{
  background-color: #a7a7a7;
}
.label{
  text-align: center;
  font-size: .7vw;
  color: #a7a7a7
}
.state{
  border-top: solid 1px #ebebff;
  text-align: center;
  font-size: 1vw;
  margin-top: 10px;
  background: #fff;
}
.tranparent{
  color: transparent
}


// 绑定设备
.isBind{
  .shape{
    border-style: solid;
  }
  .in-shape{
    border-style: solid;
  }
  .line{
    background-color: #a7a7a7;
  }
  // .label{
  //   color: #000
  // }
}

// 在线设备
.inOnline{
  .shape{
    border-color: #3481cf;
  }
  .in-shape{
    border-color: #3481cf;
  }
  .line{
    background-color: #3481cf;
  }
  .label{
    color: #000
  }
}

@font-face {
  font-family: 'iconfont';  /* project id 1617127 */
  src: url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.eot');
  src: url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.woff') format('woff'),
  url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1617127_7egyty8nv0x.svg#iconfont') format('svg');
}
</style>
