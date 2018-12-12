import { HTTP } from '../utils/http-p.js'
class KeyWordsModel extends HTTP {
  key = 'q'
  maxLength = 10
  // 获取storage中的数据
  getHistory () {
    return wx.getStorageSync(this.key) || []
  }
  getHot () {
    return this.request({
      url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/hot'
    })
  }
  
  // 添加数据到storage中
  addToHistory (keyword) {
    // 获取storage中的关键字
    let words = this.getHistory()
    // 当前storage中的数组时候包含要添加的关键字
    const has = words.includes(keyword)
    // 不包含 添加到头部，且存到本地
    if(!has) {
      words.unshift(keyword)
      // 如果大于10，把末尾的删除掉
      if (words.length >= this.maxLength) {
        words.pop()
      }
      wx.setStorageSync(this.key, words)
    }
    
  }
}

export { KeyWordsModel }