import React from 'react';
import {connect} from 'cerebral-view-react';
import filteredAndSortedItemKeys from '../../computed/filteredAndSortedItemKeys'
import Item from '../Item'

export default connect(
  {
    itemKeys: filteredAndSortedItemKeys
  },
  function Items(props) {
    return (
      <ul>
        {props.itemKeys.map(key => (
          <Item key={key} itemKey={key} />
        ))}
      </ul>
    )
  }
)
