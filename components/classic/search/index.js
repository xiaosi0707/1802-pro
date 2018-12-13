// components/classic/search/index.js
import { KeyWordsModel } from '../../../models/keywords.js'
import { BookModel } from '../../../models/book.js'
const keywordModel = new KeyWordsModel()
const bookModel = new BookModel()
Component({
  behaviors: [],
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
    dataTotal: 0,
    val: '',
    loading: false,
    noneResult: false,
    isLoading: '正在加载...'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // observer调用 - 加载更多
    _load_more () {
      const dataLength = this.data.dataArray.length
      // 如果loading为true或总的数据长度等于已返回数据的长度，禁止后续代码执行 - 正在加载...
      if (this.data.loading || this.data.dataTotal == dataLength) {
        this.setData({
          isLoading: '我是有底线的'
        })
        return
      }
      
      // 发送请求之前设置loading状态为true - 开始
      console.log(this.data.dataTotal)
      this.data.loading = true
      bookModel.getSearchList(dataLength, this.data.val).then(res => {
        let tempArr = this.data.dataArray.concat(res.books)
        this.setData({
          dataArray: tempArr
        })
        this.data.loading = false // 加载成功，loading状态变为false - 关闭
      })
    },
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    // PC回车存入storage 真机点击完成存入storage
    onConfirm (ev) {
      wx.showLoading({
        title: '搜索中...',
      })
      this.setData({
        searching: true,
        isLoading: '正在加载...'
      })
      const word = ev.detail.value // 从热门搜索、历史记录、输入，取value值
      // 搜索API请求
      bookModel.getSearchList(0, word).then(res => {
        this.setData({
          dataArray: res.books,
          dataTotal: res.total,
          val: word
        })
        // 搜索到结果后添加到storage，没结果没意义
        keywordModel.addToHistory(word) 
        wx.hideLoading() // 搜索完毕
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
