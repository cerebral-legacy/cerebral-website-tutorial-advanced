import {httpGet} from 'cerebral-module-http'
import {set} from 'cerebral/operators'
import setItems from '../actions/setItems'
import retrieveItemsFromLocalStorage from '../actions/retrieveItemsFromLocalStorage'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'

export default [
  retrieveItemsFromLocalStorage,
  setItems,
  set('state:app.isLoadingItems', true),
  httpGet('/items'), {
    success: [
      setItems
    ],
    error: [
      set('state:app.error', 'Could not load the items, try again')
    ]
  },
  set('state:app.isLoadingItems', false),
  storeItemsInLocalStorage
]
