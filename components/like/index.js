// components/like/index.js
Component({
  data: {
    like: true, // 数据绑定
    count1: 99,
    count2: 999,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
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

