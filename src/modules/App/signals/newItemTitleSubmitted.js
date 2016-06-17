import set from 'cerebral-addons/set'
import when from 'cerebral-addons/when'
import addItem from '../actions/addItem.js'
import postItem from '../actions/postItem.js'
import removeItem from '../actions/removeItem.js'
import updateItem from '../actions/updateItem.js'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'
import setItemSaving from '../factories/setItemSaving'

export default [
  when('input:/title'), {
    true: [
      addItem,
      set('state:/app.newItemTitle', ''),
      setItemSaving(true),
      postItem, {
        success: [
          updateItem
        ],
        error: [
          removeItem
        ]
      },
      setItemSaving(false),
      storeItemsInLocalStorage
    ],
    false: []
  }
]
