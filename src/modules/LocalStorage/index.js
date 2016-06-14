export default module => {

  module.addServices({
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    }
  })

}
