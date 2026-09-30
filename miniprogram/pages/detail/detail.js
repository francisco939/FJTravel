const api = require('../../utils/api')

Page({
  data: {
    type: '',
    id: 0,
    item: null,
    loading: true
  },

  onLoad(options) {
    const type = options.type
    const id = Number(options.id)
    this.setData({ type, id })

    let promise
    if (type === 'attraction') {
      promise = api.getAttractions()
    } else if (type === 'food') {
      promise = api.getFoods()
    } else {
      promise = api.getCultures()
    }

    promise.then(list => {
      const item = list.find(x => x.id === id)
      if (item) {
        wx.setNavigationBarTitle({ title: item.name })
        this.setData({ item, loading: false })
      } else {
        this.setData({ loading: false })
      }
    }).catch(() => {
      this.setData({ loading: false })
    })
  }
})
