import { HTTP } from '../../utils/http.js'

class ClassicModel extends HTTP {
  // 最新期
  getDataLatest(callback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        callback(res)
      }
    })
  }
  // 上一期
  getPrev (index, callback) {
    this.request({
      url: `/classic/${index}/previous`,
      success (res) {
        callback(res)
      }
    })
  }
  // 下一期
  getNext (index, callback) {
    this.request({
      url: `/classic/${index}/next`,
      success (res) {
        callback(res)
      }
    })
  }
}

export { ClassicModel }