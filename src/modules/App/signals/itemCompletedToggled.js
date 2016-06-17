import toggleItem from '../actions/toggleItem'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'
import patchItem from '../actions/patchItem'

export default [
  toggleItem,
  patchItem, {
    success: [],
    error: [
      toggleItem
    ]
  },
  storeItemsInLocalStorage
]
