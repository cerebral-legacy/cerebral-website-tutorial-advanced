import React from 'react';
import {connect} from 'cerebral-view-react';

export default connect({
  currentFilter: 'filters.current'
}, {
  allClicked: 'filters.allClicked',
  activeClicked: 'filters.activeClicked',
  completedClicked: 'filters.completedClicked'
},
  function Filters(props) {
    return (
      <div>
        <button
          style={{textDecoration: props.currentFilter === 'all' ? 'underline': 'none'}}
          onClick={() => props.allClicked()}
        >
          All
        </button>
        <button
          style={{textDecoration: props.currentFilter === 'active' ? 'underline': 'none'}}
          onClick={() => props.activeClicked()}
        >
          Active
        </button>
        <button
          style={{textDecoration: props.currentFilter === 'completed' ? 'underline': 'none'}}
          onClick={() => props.completedClicked()}
        >
          Completed
        </button>
      </div>
    )
  }
)
