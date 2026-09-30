const api = require('../../utils/api')

const AVATARS = ['avatar-red', 'avatar-teal', 'avatar-gold', 'avatar-green', 'avatar-blue', 'avatar-purple']

Page({
  data: {
    cities: [],
    activeCity: '',
    list: [],
    loading: true
  },

  onLoad() {
    api.getCities().then(cities => {
      this.setData({ cities })
    })
    this.loadList('')
  },

  loadList(city) {
    this.setData({ loading: true })
    api.getAttractions(city).then(list => {
      list = list.map((item, i) => ({ ...item, avatar: AVATARS[i % AVATARS.length] }))
      this.setData({ list, loading: false, activeCity: city })
    }).catch(() => {
      this.setData({ loading: false })
    })
  },

  onCityTap(e) {
    const city = e.currentTarget.dataset.city
    if (city === this.data.activeCity) return
    this.loadList(city)
  },

  onItemTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?type=attraction&id=${id}` })
  }
})
