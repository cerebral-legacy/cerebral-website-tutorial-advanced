import httpGet from 'cerebral-module-http/get'
import set from 'cerebral-addons/set'
import setItems from '../actions/setItems'

export default [
  set('state:/app.isLoadingItems', true),
  httpGet, {
    success: [
      setItems
    ],
    error: [
      set('state:/app.error', 'Could not load the items')
    ]
  },
  set('state:/app.isLoadingItems', false)
]
