function updateItem({input, module}) {
  module.state.merge(`items.${input.newId}`, input.result)
}

export default updateItem;
