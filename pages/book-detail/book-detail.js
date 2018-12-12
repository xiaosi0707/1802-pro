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
    likeCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    const detail = bookModel.getBookDetail(id)
    const comments = bookModel.getComments(id)
    const likeStatus = bookModel.getLikeStatus(id)
    detail.then(res => {
      this.setData({
        detail: res
      })
    })
    comments.then(res => {
      this.setData({
        comments: res
      })
    })
    likeStatus.then(res => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
    })
  },
  onLike (ev) {
    const likeOrCancel = ev.detail.behavior
    likeModel.like(likeOrCancel, this.data.detail.id, 400)
  }
})