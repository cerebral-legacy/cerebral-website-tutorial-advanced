import set from 'cerebral-addons/set'
import backupItem from '../actions/backupItem'
import removeItem from '../actions/removeItem'
import deleteItem from '../actions/deleteItem'
import revertItem from '../actions/revertItem'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'

export default [
  backupItem,
  removeItem,
  set('state:/app.error', null),
  deleteItem, {
    success: [],
    error: [
      revertItem,
      set('state:/app.error', 'Could not remove item on server, try again')
    ]
  },
  storeItemsInLocalStorage
]
