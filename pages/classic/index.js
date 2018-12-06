//index.js
import { ClassicModel } from '../../models/classic/index.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
//获取应用实例
const app = getApp()

Page({
  data: {
    classicData: {},
    prev: false,
    next: true
  },
  onLoad: function () {
    classicModel.getDataLatest(res => {
      wx.setStorageSync('index', res.index)
      this.setData({
        classicData: res
      })
    })
  },
  // 第三步：子传父：通过子组件传递过来的自定义事件来激活父组件中的方法
  onLike: function (ev) {
    // 点赞/取消点赞control
    let behavior = ev.detail.behavior
    let { id, type } = this.data.classicData
    likeModel.like(behavior, id, type)
  },
  onPre () {
    let { index } = this.data.classicData
    this.setData({
      next: true
    })
    if (index == (wx.getStorageSync('index') - 1)) {
      
      this.setData({
        next: true,
        prev: false
      })
      return
    }
    classicModel.getNext(index, res => {
      this.setData({
        classicData: res
      })
    })
  },
  onNext () {
    let { index } = this.data.classicData
    this.setData({
      prev: true
    })
    if(index == 2) {
      this.setData({
        next: false,
        prev: true
      })
      return
      
    }
    classicModel.getPrev(index, (res) => {
      this.setData({
        classicData: res
      })
    })
  }
})
