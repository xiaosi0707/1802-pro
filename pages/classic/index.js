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
  }
})
