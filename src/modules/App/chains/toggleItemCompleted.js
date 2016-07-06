import set from 'cerebral-addons/set'
import toggleItem from '../actions/toggleItem'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'
import patchItem from '../actions/patchItem'
import setItemSaving from '../factories/setItemSaving'

export default [
  toggleItem,
  set('state:/app.error', null),
  setItemSaving(true),
  patchItem, {
    success: [],
    error: [
      toggleItem,
      set('state:/app.error', 'Could not toggle item on server, try again')
    ]
  },
  setItemSaving(false),
  storeItemsInLocalStorage
]
