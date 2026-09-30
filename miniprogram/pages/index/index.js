const api = require('../../utils/api')

Page({
  data: {
    statusBarHeight: 20,
    loading: true,
    stats: {},
    featured_attractions: [],
    featured_foods: [],
    featured_cultures: []
  },

  onLoad() {
    const info = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync()
    this.setData({ statusBarHeight: info.statusBarHeight || 20 })
    this.loadData()
  },

  loadData() {
    api.getHome().then(data => {
      this.setData({
        loading: false,
        stats: data.stats,
        featured_attractions: data.featured_attractions,
        featured_foods: data.featured_foods,
        featured_cultures: data.featured_cultures
      })
    }).catch(() => {
      this.setData({ loading: false })
      wx.showToast({ title: '数据加载失败', icon: 'none' })
    })
  },

  // 切换到 tabBar 页面
  goTab(e) {
    const url = e.currentTarget.dataset.url
    wx.switchTab({ url })
  },

  // 跳转到非 tab 页面
  goPage(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  },

  goLucky() {
    wx.navigateTo({ url: '/pages/lucky/lucky' })
  },

  goDetail(e) {
    const { type, id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/detail/detail?type=${type}&id=${id}` })
  },

  onPullDownRefresh() {
    this.loadData()
    wx.stopPullDownRefresh()
  }
})
