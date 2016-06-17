import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral(props => ({
  item: `app.items.${props.itemKey}`
}))
class Item extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.signals.app.itemCompletedToggled({
            key: this.props.itemKey
          })}
          disabled={this.props.item.$isSaving}
        />
        {this.props.item.title}
        <button
          disabled={this.props.item.$isSaving}
          onClick={() => this.props.signals.app.removeItemClicked({
            key: this.props.itemKey
          })}
        >
          remove
        </button>
      </li>
    );
  }
}

 export default Item;
