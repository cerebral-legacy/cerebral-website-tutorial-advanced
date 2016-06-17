function toggleItem({input, module}) {
  const item = module.state.get(`items.${input.key}`)
  module.state.set(`items.${input.key}.completed`, !item.completed)
}

export default toggleItem;
