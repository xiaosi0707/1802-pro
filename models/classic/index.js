import { HTTP } from '../../utils/http.js'

class ClassicModel extends HTTP {
  // 最新期
  getDataLatest(callback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callback(res)
        // 调用设置缓存方法
        this.setLastIndex(res.index)
      }
    })
  }
  // 上一期
  getPrev (index, callback) {
    this.request({
      url: `/classic/${index}/previous`,
      success (res) {
        callback(res)
      }
    })
  }
  // 第一期方法
  isFirst (index) {
    return index === 1 ? true : false
  }
  // 最新期方法
  isLast (index) {
    let last = this.getLastIndex()
    return last == index ? true : false
  }
  // 设置缓存方法
  setLastIndex (index) {
    wx.setStorageSync('last', index)
  }
  // 获取缓存方法
  getLastIndex () {
    let index = wx.getStorageSync('last')
    return index
  }
}

export { ClassicModel }