import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect(props => ({
  item: `app.items.${props.itemKey}`
}), {
  itemCompletedToggled: 'app.itemCompletedToggled',
  removeItemClicked: 'app.removeItemClicked'
},
  function Item (props) {
    return (
      <li>
        <input
          type='checkbox'
          checked={props.item.completed}
          onChange={() => props.itemCompletedToggled({
            key: props.itemKey
          })}
          disabled={props.item.$isSaving}
        />
          {` ${props.item.title} `}
        <button
          disabled={props.item.$isSaving}
          onClick={() => props.removeItemClicked({
            key: props.itemKey
          })}
        >
          remove
        </button>
      </li>
    )
  }
)
