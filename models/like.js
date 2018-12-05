import { HTTP } from '../utils/http.js'
// 点赞/取消点赞Model
class LikeModel extends HTTP {
  like (behavior, artId, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel' 
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }
}

export { LikeModel }