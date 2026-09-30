/**
 * API 请求封装
 * ============================================================
 * 优先请求 Python 后端；若后端未启动（比赛演示时可能发生），
 * 自动回退到本地内置数据 utils/data.js，保证页面始终有内容。
 */
const config = require('./config')
const local = require('./data')

/**
 * 发起 GET 请求，返回 Promise。
 */
function request(path, params = {}) {
  const query = Object.keys(params)
    .filter(k => params[k] !== undefined && params[k] !== null && params[k] !== '')
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    .join('&')
  const url = `${config.baseUrl}${path}${query ? '?' + query : ''}`

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method: 'GET',
      timeout: 4000,
      success(res) {
        if (res.statusCode === 200 && res.data && res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data || res)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

/**
 * 带本地回退的请求：后端失败时返回本地数据。
 */
function withFallback(path, params, fallback) {
  if (!config.useMockFallback) {
    return request(path, params)
  }
  return request(path, params).catch(() => fallback(params))
}

module.exports = {
  getHome() {
    return withFallback('/api/home', {}, () => local.getHome())
  },
  getCities() {
    return withFallback('/api/cities', {}, () => local.getCities())
  },
  getAttractions(city) {
    return withFallback('/api/attractions', { city }, c => local.getAttractions(c.city))
  },
  getFoods(city) {
    return withFallback('/api/foods', { city }, c => local.getFoods(c.city))
  },
  getCultures(city) {
    return withFallback('/api/cultures', { city }, c => local.getCultures(c.city))
  },
  getPlan(days) {
    return withFallback('/api/plan', { days }, c => local.getPlan(c.days))
  },
  getLucky() {
    return withFallback('/api/lucky', {}, () => local.getLucky())
  },
  search(q) {
    return withFallback('/api/search', { q }, c => local.search(c.q))
  }
}
