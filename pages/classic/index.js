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
    first: false,
    last: true
  },
  onLoad: function () {
    classicModel.getDataLatest(res => {
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
    console.log(1)
  },
  onNext () {
    console.log(2)
  }
})
