// components/classic/search/index.js
import { KeyWordsModel } from '../../../models/keywords.js'
import { BookModel } from '../../../models/book.js'
const keywordModel = new KeyWordsModel()
const bookModel = new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    searching: false,
    dataArray: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    // PC回车存入缓存 真机完成存入缓存
    onConfirm (ev) {
      this.setData({
        searching: true
      })
      const word = ev.detail.value
      // 搜索API请求
      bookModel.getSearchList(0, word).then(res => {
        console.log(res)
        this.setData({
          dataArray: res.books
        })
        // 搜索到结果后添加到storage，没结果没意义
        keywordModel.addToHistory(word) 
      })
      
    }
  },
  attached () {
    // storage数据
    this.setData({
      historyWords: keywordModel.getHistory() // 从storage中获取数据
    })
    // 获取热搜列表
    keywordModel.getHot().then(res => {
      const { hot } = res.data
      console.log(hot)
      this.setData({
        hotWords: hot
      })
    })
    
  }
})
