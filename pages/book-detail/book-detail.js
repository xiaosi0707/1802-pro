// pages/book-detail/book-detail.js
import { BookModel } from '../../models/book.js'
let bookModel = new BookModel()
import { LikeModel } from '../../models/like.js'
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    detail: null,
    likeStatue: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    const { id } = options
    const detail = bookModel.getBookDetail(id)
    const comments = bookModel.getComments(id)
    const likeStatus = bookModel.getLikeStatus(id)
    // promise.all，还有另外一个方法race竞争，最快的完成了执行回调函数，并非等待全部完成
    Promise.all([detail, comments, likeStatus]).then(res => {
      console.log(res)
      wx.hideLoading()
      this.setData({
        detail: res[0],
        comments: res[1],
        likeStatus: res[2]
      })
      
    })
    // detail.then(res => {
    //   this.setData({
    //     detail: res
    //   })
    // })
    // comments.then(res => {
    //   this.setData({
    //     comments: res
    //   })
    // })
    // likeStatus.then(res => {
    //   this.setData({
    //     likeStatus: res.like_status,
    //     likeCount: res.fav_nums
    //   })
    // })
  },
  onFakePost(event) {
    this.setData({
      posting: true
    })
  },

  onCancel(event) {
    this.setData({
      posting: false
    })
  },
  onLike (ev) {
    const likeOrCancel = ev.detail.behavior
    likeModel.like(likeOrCancel, this.data.detail.id, 400)
  },
  tagCallBack (ev) {
    let comment = ev.detail.text || ev.detail.value
    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icno: 'none'
      })
      return
    }
    bookModel.postComment(this.data.detail.id, comment)
      .then(res => {
        wx.showToast({
          title: '+ 1',
          icon: "none"
        })
        this.data.comments.unshift({
          content: comment,
          nums: 1
        })

        this.setData({
          comments: this.data.comments,
          posting: false
        })
      })
  }
  })