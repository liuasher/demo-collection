<template>
  <div class="device-info">
    <div class="row title">
      <span>{{name_cn}}</span> &nbsp;&nbsp; <span>{{name_en}}</span>
    </div>
    <div>icon</div>
    <!-- 1键开关 -->
    <div class="row device_icon_lists">
      <li class="device_icon" v-for="state in stateList" :key="state.label">
        <div class="icon">
          <Plug1 :inOnline="state.online" :isBind="state.bind"/>
        </div>
        <div class="state">{{state.label}}</div>
      </li>
    </div>
    <!-- tooltip -->
    <div>tip</div>
    <div class="tool-tip device_icon">
      <div class="tip-info">
        <ul class="tip-lists">
          
          <li :title="item.title" v-for="item in tooltip_devie" :key="item.title">
            <span class="name">{{item.name}}</span>
            <span class="value">{{item.value}}</span>
          </li>

          <li class="gap"></li>

          <li :title="item.title" v-for="item in tooltip_model" :key="item.title">
            <span class="name">{{item.name}}</span>
            <span class="value">{{item.value}}</span>
          </li>
          
          <li class="gap"></li>

          <li :title="item.title" v-for="item in tooltip_hdwre" :key="item.title">
            <span class="name">{{item.name}}</span>
            <span class="value">{{item.value}}</span>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Plug1 from './svg/plug/1.vue';


export default Vue.extend({
    name: 'introduce',
    components: {
      Plug1,
    },
    data() {
        return {
            name_cn: '墙体插座',
            name_en: 'lumi.plug',
            stateList: [{
              online: true,
              bind: true,
              label: '在线绑定'
            }, {
              online: false,
              bind: true,
              label: '离线绑定'
            }, {
              online: false,
              bind: false,
              label: '离线解绑'
            }],

            tooltip_devie: [{
              name: '电池电量: ',
              value: '95',
              title: 'device_battery_power'
            }, {
              name: '设备温度: ',
              value: '28℃',
              title: 'device_chip_temperature'
            }, {
              name: 'Zigbee信号强度: ',
              value: '220 (优)',
              title: 'device_lqi'
            }],

            tooltip_model: [{
              name: '设备类型: ',
              value: '水浸传感器T1',
              title: '描述'
            }, {
              name: 'Model ID: ',
              value: 'lumi.158d0003fa9588',
              title: 'device_i_am'
            }, {
              name: '模型值: ',
              value: 'lumi.motion.agl02',
              title: '模型值'
            }, {
              name: '父设备did: ',
              value: 'lumi.1580000123456',
              title: 'parent_did'
            }],

            tooltip_hdwre: [{
              name: '固件版本: ',
              value: '9',
              title: 'device_fw_ver'
            }, {
              name: '硬件版本: ',
              value: '4',
              title: 'device_hw_ver'
            }, {
              name: '入网时间: ',
              value: '2020-01-09 16:42:19',
              title: 'device_cur_state'
            }],
        };
    },
    
});
</script>

<style lang="less" scope>

.title{
  margin-top: 10px;
}

.device-info{
  border-top: solid 1px #dbdbdb;
  font-size: 1.4vw;
  .row{
    margin-bottom: 10px;
  }
  .device_icon_lists{
    display: flex;
    list-style: none;
    text-decoration: none;
    // justify-content: space-between;
    .device_icon{
      width: 7vw;
      // height: 7vw;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .icon{
        // height: 7vw;
        position: relative;
        cursor: pointer;
      }
    }
  }
}

.device_icon{
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAT0lEQVQ4T2N8/fr/fwYiADfPP4avX5gIqmQEGSgqyshISOW373//c3EyE1Q3aiDukBwNQ5xhQ/1kAwpsQomaFHnqu3A06+EM/9GcQr+cAgBGqZrSrFyxegAAAABJRU5ErkJggg==');
  background-color: #fff;
  background-position: -2px;
  border-radius: 4px;
  border: solid 1px #ebebff;
}

.tool-tip{
  // width: 30vw;
  display: inline-block;
  padding: 20px;
  .tip-info{
    // width: 20vw;
    color: ghostwhite;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 4px;
    padding: 6px;
    .tip-lists{
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
      font-size: 1vw;
      cursor: pointer;
      .gap{
        border-bottom: solid 1px #989898;
        margin: 2px 0;
      }
      li{
        display: flex;
        .name{
          
        }
        .value{
          flex-grow: 1;
          margin-left: 10px;
          text-align: right;
        }
      }
    }
  }
}
</style>
