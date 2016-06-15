import {Component, h} from 'cerebral-view-snabbdom'
import filteredItems from '../../computed/filteredItems'
import Item from '../Item'

export default Component('Items', {
  items: filteredItems
}, props => (
  h('ul',
    Object.keys(props.items).map(key => (
      Item({
        key,
        itemKey: key
      })
    ))
  )
))
