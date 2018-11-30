// components/like/index.js
Component({
  properties: {
    like: {
      type: Boolean, // 必填
      value: false, // 选填
      observer: () => { // 选填
      }
    },
    count: {
      type: Number
    }
  },
  data: {
    /**
     * 封闭性、开放性、粒度
     * 
     * 对于开放的数据，我们可以称之为属性
     * 
    */
    like: true, // 数据绑定，应该开放的数据由外部进行设置
    count: 9, // 开放
    yesSrc: 'images/like.png', // 只有组件内部用到，因此无需开放
    noSrc: 'images/like@dis.png' // 无需开放
  }, 
  /**
 * 组件的方法列表
*/
  methods: {
    onLike: function () {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      this.setData({
        count,
        like: !like
      })
    }
  }
})

