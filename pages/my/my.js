// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用此方法判断是否授权，然后做相应的逻辑处理
    this.userAuthoriza()
  },
  // 是否授过权？
  userAuthoriza() {
    let _this = this
    wx.getSetting({
      success(data) {
        // console.log(data)
        // 已授权
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(data) {
              _this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        } else { // 未授权
          console.log('未授权')
        }
      }
    })
  },
  // image-button子组件通信到父组件
  onGetUserInfo (ev) {
    const { userInfo } = ev.detail
    if(userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }
    
  }
})