import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral(props => ({
  item: `app.items.${props.itemKey}`
}))
class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.item.title}
      </li>
    );
  }
}

 export default Item;
