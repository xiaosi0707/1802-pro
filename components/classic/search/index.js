// components/classic/search/index.js
import { KeyWordsModel } from '../../../models/keywords.js'
const keywordModel = new KeyWordsModel()
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
    historyWords: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel () {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm (ev) {
      const word = ev.detail.value
      keywordModel.addToHistory(word)
    }
  },
  attached () {
    this.setData({
      historyWords: keywordModel.getHistory() // 从storage中获取数据
    })
  }
})
