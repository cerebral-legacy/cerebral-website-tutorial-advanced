import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral({
  currentFilter: 'filters.current'
})
class Filters extends React.Component {
  render() {
    return (
      <div>
        <button
          style={{textDecoration: this.props.currentFilter === 'all' ? 'underline': 'none'}}
          onClick={() => this.props.signals.filters.allClicked()}
        >
          All
        </button>
        <button
          style={{textDecoration: this.props.currentFilter === 'active' ? 'underline': 'none'}}
          onClick={() => this.props.signals.filters.activeClicked()}
        >
          Active
        </button>
        <button
          style={{textDecoration: this.props.currentFilter === 'completed' ? 'underline': 'none'}}
          onClick={() => this.props.signals.filters.completedClicked()}
        >
          Completed
        </button>
      </div>
    );
  }
}

 export default Filters;
