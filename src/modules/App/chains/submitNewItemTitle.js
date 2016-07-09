import {set, when} from 'cerebral/operators'
import addItem from '../actions/addItem.js'
import postItem from '../actions/postItem.js'
import removeItem from '../actions/removeItem.js'
import updateItem from '../actions/updateItem.js'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'
import setItemSaving from '../factories/setItemSaving'

export default [
  when('state:app.newItemTitle'), {
    true: [
      addItem,
      set('state:app.newItemTitle', ''),
      set('state:app.error', null),
      setItemSaving(true),
      postItem, {
        success: [
          updateItem,
          setItemSaving(false)
        ],
        error: [
          removeItem,
          set('state:app.error', 'Could not add item on server, try again')
        ]
      },
      storeItemsInLocalStorage
    ],
    false: []
  }
]
