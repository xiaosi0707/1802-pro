// components/classic/music/index.js
import { classicBeh } from '../classic-behavior.js'
const musicManObj = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    img: String,
    content: String,
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },
  attached: function() {
    console.log(1)
    // 如果没有歌曲播放，那么显示停止状态
    if(musicManObj.paused) {
      this.setData({
        playing: false
      })
      return
    }
    // 如果后台播放的歌曲 == 当前正在播放的歌曲，那么显示播放状态
    if(musicManObj.src == this.properties.src) {
      this.setData({
        playing: true
      })
    }
  },
  detached (ev) {
    // wx:if和hidden区别
    // if会执行完成的生命周期，因此detached会被触发,歌曲停止播放
    // hidden只是单纯的显示隐藏，因此不会触发生命周期，歌曲继续播放
    // musicManObj.stop() 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击播放或停止
    onPlay (ev) {
      // 未播放 - 播放
      if(!this.data.playing) {
        this.setData({
          playing: true
        })
        musicManObj.src = this.properties.src
        musicManObj.title = this.properties.title
      }
      // 停止播放
      else {
        this.setData({
          playing: false
        })
        musicManObj.pause()
      }
      
    }
  }
})
