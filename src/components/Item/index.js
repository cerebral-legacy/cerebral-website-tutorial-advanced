import {connect, h} from 'cerebral-view-snabbdom'

export default connect(props => ({
  item: `app.items.${props.itemKey}`
}), {
  itemCompletedToggled: 'app.itemCompletedToggled',
  removeItemClicked: 'app.removeItemClicked'
},
  function Item(props) {

    function onCheckboxToggle() {
      props.itemCompletedToggled({
        key: props.itemKey
      })
    }

    function onButtonClick() {
      props.removeItemClicked({
        key: props.itemKey
      })
    }

    return h('li', {}, [
      h('input', {
        props: {
          type: 'checkbox',
          checked: props.item.completed,
          disabled: props.item.$isSaving
        },
        on: {
          input: onCheckboxToggle
        }
      }),
      props.item.title,
      h('button', {
        props: {
          disabled: props.item.$isSaving
        },
        on: {
          click: onButtonClick
        }
      }, 'remove')
    ])

  }
)
