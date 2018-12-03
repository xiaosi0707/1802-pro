//index.js
import { ClassicModel } from '../../models/classic/index.js'
let classic = new ClassicModel()
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    classic.getDataLatest(res => {
      console.log(res)
      this.setData({
        classicData: res
      })
    })
  },
  // 通过子组件传递过来的自定义事件来激活父组件中的方法
  onLike: function (ev) {
    console.log(ev)
  }
})
