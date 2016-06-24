import {Component, h} from 'cerebral-view-snabbdom'

export default Component('Item', props => ({
  item: `app.items.${props.itemKey}`
}), props => {

  function onCheckboxToggle() {
    props.signals.app.itemCompletedToggled({
      key: props.itemKey
    })
  }

  function onButtonClick() {
    props.signals.app.removeItemClicked({
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

})
