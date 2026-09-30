const api = require('../../utils/api')

Page({
  data: {
    shaking: false,
    result: null
  },

  onLoad() {
    this.draw()
  },

  draw() {
    if (this.data.shaking) return
    this.setData({ shaking: true, result: null })

    setTimeout(() => {
      api.getLucky().then(result => {
        this.setData({ shaking: false, result })
      }).catch(() => {
        this.setData({ shaking: false })
        wx.showToast({ title: '抽签失败，请重试', icon: 'none' })
      })
    }, 900)
  },

  goDetail(e) {
    const { type, id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/detail/detail?type=${type}&id=${id}` })
  }
})
