import {connect, h} from 'cerebral-view-snabbdom'

export default connect({
  currentFilter: 'filters.current'
},
  function Filters(props) {

    return h('div', {}, [
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'all' ? 'underline' : 'none'
        },
        on: {
          click() { props.signals.filters.allClicked() }
        }
      }, 'All'),
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'active' ? 'underline' : 'none'
        },
        on: {
          click() { props.signals.filters.activeClicked() }
        }
      }, 'Active'),
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'completed' ? 'underline' : 'none'
        },
        on: {
          click() { props.signals.filters.completedClicked() }
        }
      }, 'Completed')
    ])

  }
)
