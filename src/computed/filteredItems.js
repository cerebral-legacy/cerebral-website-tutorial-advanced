import computed from 'cerebral-computed'

export default computed({
  items: 'app.items',
  filter: 'filters.current'
}, state => {

  if (state.filter === 'all') {
    return state.items
  }

  return Object.keys(state.items).reduce((filteredItems, key) => {
    if (state.filter === 'completed' && state.items[key].completed) {
      filteredItems[key] = state.items[key]
    } else if (state.filter === 'active' && !state.items[key].completed) {
      filteredItems[key] = state.items[key]
    }

    return filteredItems
  }, {})

})
