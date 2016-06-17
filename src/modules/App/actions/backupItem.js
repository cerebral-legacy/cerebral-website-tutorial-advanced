function backupItem({input, module, output}) {
  const item = module.state.get(`items.${input.key}`)
  output({item})
}

export default backupItem
