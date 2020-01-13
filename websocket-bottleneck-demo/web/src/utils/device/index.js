// 温控器模拟

const setAcCode = ({
  switchStatus,
  modeStatus,
  windSpeed,
  windSweep,
  temperature
}) => {
  // 将空调开关状态、模式、风速、扫风、温度转换成unitValue
  const switchStatusHex = parseInt(switchStatus, 10).toString(16);
  const modeHex = parseInt(modeStatus, 10).toString(16);
  const windSpeedHex = parseInt(windSpeed, 10).toString(16);
  const windSweepHex = parseInt(windSweep, 10).toString(16);
  const controlTemp = parseInt(temperature, 10).toString(16);
  let controlTempHex = controlTemp;
  if (controlTemp.length === 1) {
    controlTempHex = `0${controlTemp}`;
  }
  const condition =
    `${switchStatusHex +
    modeHex +
    windSpeedHex +
    windSweepHex +
    controlTempHex 
    }00`;
  return parseInt(condition, 16);
};

const getAcCode = (unitValue) => {
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
};


// 温控器，空调伴侣
class S_AC_CONTROLLER {
  constructor(switcher) {
    this.switcher = {
      access: 'rw',
      attrValues: [{
        timeStamp: 1574764005575, 
        serviceId: 'S01624650755270098944', 
        attr: 'ac_state', 
        value: '271588216'
      }],
      iconId: 'ctrl_ac_default',
      name: '空调',
      positionId: 'real2.633327739233865728',
      positionName: '卧室',
      serviceId: 'S01624650755270098944',
      serviceType: 'S_AC',
      state: 1,
      subjectId: 'lumi.158d0001c0c4dc',
      subjectModel: 'lumi.ctrl_hvac.es1',
      subjectName: '空调温控器',
      subjectType: 1,
    };
    this.serviceId = '';
    this.parseResult = '';
    this.init(switcher);
  }

  init() {
    const { serviceId, attrValues } = this.switcher;
    const { value } = attrValues[0];
    this.serviceId = serviceId;
    this.parseResult = getAcCode(value);
  }


  // 切换温控器的开关
  switchState() {
    return new Promise((resolve, reject) => {
      const { switchStatus } = this.parseResult;
      this.parseResult.switchStatus = (switchStatus + 1) % 2;
      this.uploadControlResult(setAcCode(this.parseResult), resolve);
    });
  }

  // 切换风速
  switchSpeed() {
    return new Promise((resolve, reject) => {
      const parseResult = this.parseCode(this.switcher);
      const { windSpeed } = parseResult;
      parseResult.windSpeed = (windSpeed + 1) % 4;
      this.uploadControlResult(setAcCode(parseResult), resolve);
    });
  }

  // 切换模式
  switchModel() {
    return new Promise((resolve, reject) => {
      const parseResult = this.parseCode(this.switcher);
      const { modeStatus } = parseResult;
      parseResult.modeStatus = (modeStatus + 1) % 5;
      this.uploadControlResult(setAcCode(parseResult), resolve);
    });
  }

  // 增加温度
  increaseTemp() {
    return new Promise((resolve, reject) => {
      const parseResult = this.parseCode(this.switcher);
      const { temperature } = parseResult;
      parseResult.temperature = temperature + 1;
      this.uploadControlResult(setAcCode(parseResult), resolve);
    });
  }

  // 降低温度
  decreaseTemp() {
    return new Promise((resolve, reject) => {
      const parseResult = this.parseCode(this.switcher);
      const { temperature } = parseResult;
      parseResult.temperature = temperature - 1;
      this.uploadControlResult(setAcCode(parseResult), resolve);
    });
  }

  /**
   * 解析设备状态
   */
  parseCode() {
    const { attrValues, positionName, name } = this.switcher;
    const { value } = attrValues[0];
    const { 
      modeLabel = '', 
      modeStatus, 
      switchStatus, 
      temperature, 
      windDirect, 
      windSpeed, 
      windSpeedLabel = '', 
      windSweep 
    } = getAcCode(value);

    const labelOn = `${modeLabel}${temperature}  ${windSpeedLabel}`;
    const labelOff = '关';
    const labelIntro = `${positionName} ${name}`;

    return {
      modeLabel,
      modeStatus,
      switchStatus,
      temperature,
      windDirect,
      windSpeed,
      windSpeedLabel,
      windSweep,
      labelOn,
      labelOff,
      labelIntro
    };
  }
}

export default S_AC_CONTROLLER;
