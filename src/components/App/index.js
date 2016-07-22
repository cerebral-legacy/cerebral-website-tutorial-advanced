import {connect, h} from 'cerebral-view-snabbdom'
import Filters from '../Filters'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  error: 'app.error'
}, {
  newItemTitleSubmitted: 'app.newItemTitleSubmitted',
  newItemTitleChanged: 'app.newItemTitleChanged',
  mounted: 'app.mounted'
},
  function App(props) {

    function onFormSubmit(event) {
      event.preventDefault()
      props.newItemTitleSubmitted()
    }

    function onInputChange(event) {
      props.newItemTitleChanged({
        title: event.target.value
      })
    }

    return h('div', {
      hook: {
        insert() { props.mounted(); }
      }
    }, [
      Filters(),
      h('br'),
      h('form', {
        on: {
          submit: onFormSubmit
        }
      }, [
        h('input', {
          props: {
            autoFocus: true,
            value: props.newItemTitle
          },
          on: {
            input: onInputChange
          }
        }),
        props.error ?
          h('span', {
            style: {
              color: 'red',
              paddingLeft: '10px'
            }
          }, props.error)
        :
          ''
      ]),
      Items()
    ])
  }
)
