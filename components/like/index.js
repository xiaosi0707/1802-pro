// components/like/index.js
Component({
  data: {
    /**
     * 封闭性、开放性、粒度
     * 
    */
    like: true, // 数据绑定，应该开放的数据由外部进行控制
    count: 9, // 开放
    yesSrc: 'images/like.png', // 只有组件内部用到，因此无需开放
    noSrc: 'images/like@dis.png' // 无需开放
  }, 
  /**
 * 组件的方法列表
*/
  methods: {
    onLike: function (ev) {
      console.log(ev)
    }
  }
})

