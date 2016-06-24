import {Component, h} from 'cerebral-view-snabbdom'
import filteredAndSortedItemKeys from '../../computed/filteredAndSortedItemKeys'
import Item from '../Item'

export default Component('Items', {
  itemKeys: filteredAndSortedItemKeys
}, props => (
  h('ul',
    props.itemKeys.map(key => (
      Item({
        key,
        itemKey: key
      })
    ))
  )
))
