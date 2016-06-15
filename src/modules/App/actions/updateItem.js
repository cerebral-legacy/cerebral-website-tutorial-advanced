function updateItem({input, module}) {
  module.merge(`items.${input.newId}`, input.result)
}

export default updateItem;
