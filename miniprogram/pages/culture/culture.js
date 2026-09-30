const api = require('../../utils/api')

const AVATARS = ['avatar-purple', 'avatar-red', 'avatar-teal', 'avatar-gold', 'avatar-green', 'avatar-blue']

Page({
  data: {
    cities: [],
    activeCity: '',
    all: [],
    list: [],
    loading: true
  },

  onLoad() {
    api.getCultures().then(list => {
      const cities = [...new Set(list.map(c => c.city))]
      this.setData({ all: list, cities, list: this.decorate(list), loading: false })
    }).catch(() => this.setData({ loading: false }))
  },

  decorate(list) {
    return list.map((item, i) => ({ ...item, avatar: AVATARS[i % AVATARS.length] }))
  },

  onCityTap(e) {
    const city = e.currentTarget.dataset.city
    this.setData({ activeCity: city })
    const list = city ? this.data.all.filter(c => c.city === city) : this.data.all
    this.setData({ list: this.decorate(list) })
  },

  onItemTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?type=culture&id=${id}` })
  }
})
