import toggleItem from '../actions/toggleItem'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'
import patchItem from '../actions/patchItem'
import setItemSaving from '../factories/setItemSaving'

export default [
  toggleItem,
  setItemSaving(true),
  patchItem, {
    success: [],
    error: [
      toggleItem
    ]
  },
  setItemSaving(false),
  storeItemsInLocalStorage
]
