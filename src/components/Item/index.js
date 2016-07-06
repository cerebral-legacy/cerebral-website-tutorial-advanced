import React from 'react';
import {connect} from 'cerebral-view-react';

export default connect(props => ({
  item: `app.items.${props.itemKey}`
}),
  function Item(props) {
    return (
      <li>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.signals.app.itemCompletedToggled({
            key: props.itemKey
          })}
          disabled={props.item.$isSaving}
        />
          {` ${props.item.title} `}
        <button
          disabled={props.item.$isSaving}
          onClick={() => props.signals.app.removeItemClicked({
            key: props.itemKey
          })}
        >
          remove
        </button>
      </li>
    )
  }
)
