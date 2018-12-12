import { HTTP } from '../utils/http-p.js'

class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })
  }
  getMyBookCount () {
    return this.request({
      url: 'book/favor/count'
    })
  }
  getBookDetail (id) {
    return this.request({
      url: `book/${id}/detail`
    })
  }
  getLikeStatus (id) {
    return this.request({
      url: `/book/${id}/favor`
    })
  }
  getComments(id) {
    return this.request({
      url: `/book/${id}/short_comment`
    })
  }
  postComment (id, content) {
    return this.request({
      url: '/book/add/short_comment',
      method: 'POST',
      data: {
        book_id: id,
        content
      }
    })
  }
  getSearchList(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q,
        start
      }
    })
  }
}
export { BookModel }