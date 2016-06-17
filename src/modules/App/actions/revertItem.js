function revertItem({input, module}) {
  module.state.set(`items.${input.key}`, input.item)
}

export default revertItem
