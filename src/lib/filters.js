import Vue from 'vue'

// strips protocol
Vue.filter('stripProtocol', (url) => {
  const temp = url.replace(/^(http|https|ftp|mailto):\/\/$/g,'')
  if (temp[temp.length-1] == '/') return temp.substr(0, temp.length - 1)
  return temp
})

// filesize formatter
Vue.filter('fileSizeFormatter', (size) => {
  const floatFix = (n) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n)
  if (!size) return '-'
  if (size > 0 && size <= 999) return floatFix(size) + ' B'
  if (size > 999 && size <= 9999) return floatFix(size/1024) + ' KB'
  return floatFix(size/(1024*1024)) + ' MB'
})