import uuid from 'uuid'

function addItem({module, output}) {
  const newId = uuid.v4()

  module.set(`items.${newId}`, {
    title: module.get('newItemTitle'),
    completed: false,
    datetime: Date.now()
  })

  output({ newId })
}

export default addItem
