import Inferno from 'inferno';
import {connect} from 'cerebral-view-inferno';

export default connect({
  currentFilter: 'filters.current'
},
  function Filters(props) {
    return (
      <div>
        <button
          style={{textDecoration: props.currentFilter === 'all' ? 'underline': 'none'}}
          onClick={() => props.signals.filters.allClicked()}
        >
          All
        </button>
        <button
          style={{textDecoration: props.currentFilter === 'active' ? 'underline': 'none'}}
          onClick={() => props.signals.filters.activeClicked()}
        >
          Active
        </button>
        <button
          style={{textDecoration: props.currentFilter === 'completed' ? 'underline': 'none'}}
          onClick={() => props.signals.filters.completedClicked()}
        >
          Completed
        </button>
      </div>
    )
  }
)
