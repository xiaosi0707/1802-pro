// components/classic/image-button/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    openType: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 授权后取到的值通过子传父的方式传递给父组件
    onGetUserInfo (ev) {
      this.triggerEvent('getUserInfo', ev.detail)
    }
  }
})
