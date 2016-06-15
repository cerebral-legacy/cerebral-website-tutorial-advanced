function addItem({ module }) {
  module.unshift('items', {
    title: module.get('newItemTitle')
  })
}

export default addItem
