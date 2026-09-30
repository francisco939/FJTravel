const api = require('../../utils/api')

Page({
  data: {
    daysOptions: [
      { v: 3, label: '3 日游' },
      { v: 5, label: '5 日游' },
      { v: 7, label: '7 日游' }
    ],
    days: 3,
    plan: null,
    loading: true
  },

  onLoad() {
    this.loadPlan(3)
  },

  loadPlan(days) {
    this.setData({ loading: true, days })
    api.getPlan(days).then(plan => {
      this.setData({ plan, loading: false })
    }).catch(() => {
      this.setData({ loading: false })
    })
  },

  onDaysTap(e) {
    const days = Number(e.currentTarget.dataset.days)
    if (days === this.data.days) return
    this.loadPlan(days)
  }
})
