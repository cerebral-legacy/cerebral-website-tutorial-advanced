import {connect, h} from 'cerebral-view-snabbdom'

export default connect({
  currentFilter: 'filters.current'
}, {
  allClicked: 'filters.allClicked',
  activeClicked: 'filters.activeClicked',
  completedClicked: 'filters.completedClicked'
},
  function Filters(props) {

    return h('div', {}, [
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'all' ? 'underline' : 'none'
        },
        on: {
          click() { props.allClicked() }
        }
      }, 'All'),
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'active' ? 'underline' : 'none'
        },
        on: {
          click() { props.activeClicked() }
        }
      }, 'Active'),
      h('button', {
        style: {
          textDecoration: props.currentFilter === 'completed' ? 'underline' : 'none'
        },
        on: {
          click() { props.completedClicked() }
        }
      }, 'Completed')
    ])

  }
)
