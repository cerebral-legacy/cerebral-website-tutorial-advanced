import {Computed} from 'cerebral'

function sortByDatetime (a, b) {
  if (a.item.datetime > b.item.datetime) {
    return -1
  } else if (a.item.datetime < b.item.datetime) {
    return 1
  }
  return 0
}

export default Computed({
  items: 'app.items',
  filter: 'filters.current'
}, state => {
  const sortedItems = Object.keys(state.items)
    .map(key => ({key, item: state.items[key]}))
    .sort(sortByDatetime)

  if (state.filter === 'all') {
    return sortedItems.map(data => data.key)
  } else if (state.filter === 'completed') {
    return sortedItems
      .filter(data => data.item.completed)
      .map(data => data.key)
  } else {
    return sortedItems
      .filter(data => !data.item.completed)
      .map(data => data.key)
  }
})
