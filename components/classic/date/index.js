// components/classic/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer(newVal, oldVal, changedPath) { // 属性被改变时执行的函数
        // console.log(newVal) // 新数据
        // console.log(oldVal) // 旧数据
        // console.log(changedPath) // 哪个值发生了变化
        // console.log(newVal)
        let val = newVal < 10 ? '0' + newVal : newVal
        console.log(val)
        // 千万不要在一个observer函数中去修改属性本身的值，否则的话很有可能引起无限递归造成内存泄漏的情况。
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: String,
    _index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
