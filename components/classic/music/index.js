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

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay (ev) {
      if(!this.data.playing) {
        this.setData({
          playing: true
        })
        musicManObj.src = this.properties.src
        musicManObj.title = this.properties.title
      }
      else {
        this.setData({
          playing: false
        })
        musicManObj.pause()
      }
      
    }
  }
})
