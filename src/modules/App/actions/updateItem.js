function updateItem({input, module}) {
  module.state.merge(`items.${input.key}`, input.result)
}

export default updateItem;
