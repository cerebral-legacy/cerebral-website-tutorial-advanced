import uuid from 'uuid'

function setItems ({ input, module }) {
  const items = input.result.reduce((allItems, item) => {
    allItems[uuid.v4()] = item
    return allItems
  }, {})

  module.state.set('items', items)
}

export default setItems
