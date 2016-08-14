function setItemSaving (isSaving) {
  function action ({input, module}) {
    module.state.set(`items.${input.key}.$isSaving`, isSaving)
  }
  action.displayName = `setItemSaving (${isSaving})`

  return action
}

export default setItemSaving
