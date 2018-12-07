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
    next: true,
    likeCount: 0,
    likeStatus: false
  },
  onLoad: function () {
    classicModel.getDataLatest(res => {
      // 第四步：最新期的期刊没有显示点赞信息所以onload时候需要调用一次
      // this._getLikeStatus(res.id, res.type)
      this.setData({
        classicData: res,
        likeCount: res.fav_nums, // 第五步：优化就要做到完美，这里还可以减少一次http请求
        likeStatus: res.like_status
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
  // 第三步：切换的时候进行调用
  updateClassic (nextOrPrev) {
    let { index } = this.data.classicData
    classicModel.getClassic(index, nextOrPrev, res => {
      this._getLikeStatus(res.id, res.type) // 调用
      this.setData({
        classicData: res
      })
    })
  },
  onPre () {
    this.updateClassic('previous')
  },
  onNext () {
    this.updateClassic('next')
  },
  // 第二步：定义方法供多处调用（私有）
  _getLikeStatus: function (artID, category) {
    likeModel.getClassicLikeStatus(artID, category,
      (res) => {
        this.setData({
          likeCount: res.fav_nums, // 更新数据
          likeStatus: res.like_status
        })
      })
  },
})
