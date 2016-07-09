import {connect, h} from 'cerebral-view-snabbdom'
import filteredAndSortedItemKeys from '../../computed/filteredAndSortedItemKeys'
import Item from '../Item'

export default connect({
  itemKeys: filteredAndSortedItemKeys
},
  function Items(props) {
    return (
      h('ul',
        props.itemKeys.map(key => (
          Item({
            key,
            itemKey: key
          })
        ))
      )
    )
  }
)
