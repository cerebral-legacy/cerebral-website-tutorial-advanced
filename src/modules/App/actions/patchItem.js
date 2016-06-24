function patchItem({input, module, output, services}) {
  const item = module.state.get(`items.${input.key}`)

  services.http.patch(`/items/${item.id}`, {
    title: item.title,
    completed: item.completed
  })
    .then(output.success)
    .catch(output.error)
}

patchItem.async = true
patchItem.outputs = ['success', 'error'];

export default patchItem;
