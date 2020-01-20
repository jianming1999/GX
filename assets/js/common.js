import $ from 'jquery'
import echarts from 'echarts'
/**
 * 公共方法
 */
export default {
  // 设置sessionStorage
  setSessionStorage (name, value) {
    sessionStorage.setItem(name, value)
  },
  // 读取sessionStorage
  getSessionStorage (name, value) {
    const item = sessionStorage.getItem(name)
    return item
  },
  // 删除sessionStorage
  delSessionStorage (name) {
    sessionStorage.removeItem(name)
  },

  // 错误警告提示
  warningInfoTip (info, time) {
    let duration = 2500
    if (time) {
      duration = time
    }
    Message({
      type: 'warning',
      message: info,
      duration: duration
    })
    return false
  },

  // 成功提示
  successInfoTip (info, time) {
    let duration = 2500
    if (time) {
      duration = time
    }
    Message({
      type: 'success',
      message: info,
      duration: duration
    })
    return false
  },

  // 在对象的拷贝方法中比较困扰的就是深层拷贝，此方法为深层拷贝；
  deepCopy (data) {
    if (process.browser) {
      return window.JSON.parse(window.JSON.stringify(data))
    }
  },

  /**
   *  地图框架
   *  obj为传入的对象，参数如下：
   *  eId 图表展示的位图ID
   *  title 展示的标题
   *  data  数据
   *  textColor 展示色调
   *
   * */
  loadColumnMap (obj, cb) {
    let myChart = echarts.init(document.getElementById(obj.eId))
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(obj)
    // 当浏览器大小变化时
    $(window).resize(() => {
      myChart && myChart.resize()
    })
    cb && cb(myChart)
  },

  // 字段串，三位三位处理
  formatNumber (val) {
    let len = String(val).split('.')[0].length
    let num2 = String(val).split('.')[1]
    let arr = []
    let lastIndex = null
    while (len > 0) {
      lastIndex = len
      len -= 3
      arr.unshift(String(val).substring(len, lastIndex))
    }
    val = arr.join(',')
    if (num2) {
      return `${val}.${num2}`
    } else {
      return val
    }
  },

  // 广西壮族自治区信访局地区搜索数据
  getAreaData () {
    const list = [{
      value: '南宁市信访局',
      label: '南宁市信访局',
      children: [{
        value: '南宁市信访局县级数据1',
        label: '南宁市信访局县级数据1'
      },
      {
        value: '南宁市信访局县级数据2',
        label: '南宁市信访局县级数据2'
      }]
    },
    {
      value: '柳州市信访局',
      label: '柳州市信访局',
      children: [{
        value: '柳州市信访局县级数据1',
        label: '柳州市信访局县级数据1'
      },
      {
        value: '柳州市信访局县级数据2',
        label: '柳州市信访局县级数据2'
      }]
    },
    {
      value: '桂林市信访局',
      label: '桂林市信访局',
      children: [{
        value: '桂林市信访局县级数据1',
        label: '桂林市信访局县级数据1'
      },
        {
          value: '桂林市信访局县级数据2',
          label: '桂林市信访局县级数据2'
        }]
    }]
    return list
  }
}
