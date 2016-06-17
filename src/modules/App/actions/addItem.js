import uuid from 'uuid'

function addItem({module, output}) {
  const key = uuid.v4()

  module.set(`items.${key}`, {
    title: module.state.get('newItemTitle'),
    completed: false,
    datetime: Date.now(),
    $isSaved: false
  })

  output({key})
}

export default addItem
