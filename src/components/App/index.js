import {connect, h} from 'cerebral-view-snabbdom'
import Filters from '../Filters'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  error: 'app.error'
},
  function App(props) {

    function onFormSubmit(event) {
      event.preventDefault()
      props.signals.app.newItemTitleSubmitted()
    }

    function onInputChange(event) {
      props.signals.app.newItemTitleChanged({
        title: event.target.value
      })
    }

    return h('div', {
      hook: {
        insert() { props.signals.app.mounted(); }
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
