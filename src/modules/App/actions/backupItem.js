function backupItem({input, module, output}) {
  const item = module.state.get(`items.${key}`)
  output({item})
}
