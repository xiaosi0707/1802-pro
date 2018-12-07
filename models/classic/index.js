import { HTTP } from '../../utils/http.js'

class ClassicModel extends HTTP {
  // 最新期
  getDataLatest(callback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        // 只要有数据更新就先添加到缓存
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)

        callback(res)
      }
    })
  }
  getClassic (index, nextOrPrev, callback) {
    // 第二步：根据传入的nextOrPrev判断是点击了next还是prev，来决定是上一个数据还是下一个数据
    let key = nextOrPrev == 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    // 通过key返回具体的数据
    let classic = wx.getStorageSync(key)
    // 如果数据不存在，request
    if(!classic) {
      this.request({
        url: `classic/${index}/${nextOrPrev}`,
        success: res => {
          wx.setStorageSync(this._getKey(res.index), res)
          callback(res)
        }
      })
    }
    // 存在就把缓存的数据传递给视图
     else {
       callback(classic)
     }
    
  }
  // 第一步：按照规则生成key值
  _getKey (index) {
    let key = `classic-${index}`
    return key
  }
  _setLastIndex(index) {
    wx.setStorageSync('last', index)
  }
  // 上一期
  // getPrev (index, callback) {
  //   this.request({
  //     url: `/classic/${index}/previous`,
  //     success (res) {
  //       callback(res)
  //     }
  //   })
  // }
  // 下一期
  // getNext (index, callback) {
  //   this.request({
  //     url: `/classic/${index}/next`,
  //     success (res) {
  //       callback(res)
  //     }
  //   })
  // }
}

export { ClassicModel }