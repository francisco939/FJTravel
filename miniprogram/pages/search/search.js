const api = require('../../utils/api')

Page({
  data: {
    keyword: '',
    searched: false,
    results: null,
    hots: ['鼓浪屿', '土楼', '沙茶面', '妈祖', '武夷山', '海丝']
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value })
  },

  onSearch() {
    const q = this.data.keyword.trim()
    if (!q) {
      wx.showToast({ title: '请输入关键词', icon: 'none' })
      return
    }
    this.doSearch(q)
  },

  onHotTap(e) {
    const k = e.currentTarget.dataset.k
    this.setData({ keyword: k })
    this.doSearch(k)
  },

  doSearch(q) {
    this.setData({ searched: true })
    api.search(q).then(results => {
      this.setData({ results })
    }).catch(() => {
      this.setData({ results: { attractions: [], foods: [], cultures: [] } })
    })
  },

  onClear() {
    this.setData({ keyword: '', searched: false, results: null })
  },

  goDetail(e) {
    const { type, id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/detail/detail?type=${type}&id=${id}` })
  }
})
