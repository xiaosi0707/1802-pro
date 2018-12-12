class KeyWordsModel {
  key = 'q'
  maxLength = 10
  // 获取storage中的数据
  getHistory () {
    return wx.getStorageSync(this.key) || []
  }
  getHot () {}
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