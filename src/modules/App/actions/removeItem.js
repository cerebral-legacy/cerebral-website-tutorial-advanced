function removeItem ({input, module}) {
  module.state.unset(`items.${input.key}`)
}

export default removeItem
