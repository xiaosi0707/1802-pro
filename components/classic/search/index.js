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
    more: {
      type: Number,
      observer: '_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    searching: false,
    dataArray: [],
    val: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // observer调用 - 加载更多
    _load_more () {
      const dataLength = this.data.dataArray.length
      bookModel.getSearchList(dataLength, this.data.val).then(res => {
        let tempArr = this.data.dataArray.concat(res.books)
        this.setData({
          dataArray: tempArr
        })
      })
    },
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    // PC回车存入缓存 真机完成存入缓存
    onConfirm (ev) {
      this.setData({
        searching: true
      })
      const word = ev.detail.value // 从热门搜索、历史记录、输入，取value值
      // 搜索API请求
      bookModel.getSearchList(0, word).then(res => {
        this.setData({
          dataArray: res.books,
          val: word
        })
        // 搜索到结果后添加到storage，没结果没意义
        keywordModel.addToHistory(word) 
      })
      
    },
    cancelSearch () {
      this.setData({
        searching: false
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
