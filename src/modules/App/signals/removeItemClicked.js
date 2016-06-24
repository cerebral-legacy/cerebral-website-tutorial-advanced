import backupItem from '../actions/backupItem'
import removeItem from '../actions/removeItem'
import deleteItem from '../actions/deleteItem'
import revertItem from '../actions/revertItem'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'

export default [
  backupItem,
  removeItem,
  deleteItem, {
    success: [],
    error: [
      revertItem
    ]
  },
  storeItemsInLocalStorage
]
