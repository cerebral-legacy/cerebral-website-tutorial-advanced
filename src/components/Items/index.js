import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import filteredItems from '../../computed/filteredItems'
import Item from '../Item'

@Cerebral({
  items: filteredItems
})
class Items extends React.Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props.items).map(key => (
          <Item key={key} itemKey={key} />
        ))}
      </ul>
    );
  }
}

 export default Items;
