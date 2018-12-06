import { HTTP } from '../../utils/http.js'

class ClassicModel extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: 'classic/latest',
      success (res) {
        callback(res)
      }
    })
  }
  getPrev (index, callback) {
    this.request({
      url: `/classic/${index}/previous`,
      success (res) {
        callback(res)
      }
    })
  }
}

export { ClassicModel }