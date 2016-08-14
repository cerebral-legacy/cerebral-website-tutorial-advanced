export default module => {
  module.addServices({
    set (key, value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    get (key) {
      return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null
    }
  })
}
