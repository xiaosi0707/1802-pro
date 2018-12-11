// pages/book/book.js
import { BookModel } from '../../models/book.js'
let bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // promise正确用法
    // bookModel.getHotList().then(res => {
    //   console.log(res)
    //   return bookModel.getMyBookCount()
    // }).then(res => {
    //   console.log(res)
    //   return bookModel.getMyBookCount()
    // }).then(res => {
    //   console.log(res)
    // })
    /**
     * promise错误用法
     * 回调地狱了
     * **/
    // bookModel.getHotList().then(res => { // API 1
    //   console.log(res)
    //   bookModel.getMyBookCount().then(res => { // API 2
    //     console.log(res)
    //     bookModel.getMyBookCount().then(res => { // API 3
    //       console.log(res)
    //     })
    //   })
    // })
    
    /**
     * pending 进行中
     * fulfilled  已成功
     * rejected   已失败
     * 结果不可逆 
     * **/
    // const promise = new Promise((resolve, reject) => {
    //   wx.getSystemInfo({
    //     success: (res) => {
    //       resolve(res)
    //     },
    //     fail: (err) => {
    //       reject(err)
    //     },
    //     complete: function(res) {},
    //   })
    // })
    // // 通过promise拿到异步返回的结果
    // // then这两个返回的方法是不可以颠倒的
    // promise.then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})