import httpGet from 'cerebral-module-http/get'
import set from 'cerebral-addons/set'
import setItems from '../actions/setItems'
import retrieveItemsFromLocalStorage from '../actions/retrieveItemsFromLocalStorage'
import storeItemsInLocalStorage from '../actions/storeItemsInLocalStorage'

export default [
  retrieveItemsFromLocalStorage,
  setItems,
  set('state:/app.isLoadingItems', true),
  httpGet('/items'), {
    success: [
      setItems
    ],
    error: [
      set('state:/app.error', 'Could not load the items')
    ]
  },
  set('state:/app.isLoadingItems', false),
  storeItemsInLocalStorage
]
