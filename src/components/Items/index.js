import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import filteredAndSortedItemKeys from '../../computed/filteredAndSortedItemKeys'
import Item from '../Item'

@Cerebral({
  itemKeys: filteredAndSortedItemKeys
})
class Items extends React.Component {
  render() {
    return (
      <ul>
        {this.props.itemKeys.map(key => (
          <Item key={key} itemKey={key} />
        ))}
      </ul>
    );
  }
}

 export default Items;
