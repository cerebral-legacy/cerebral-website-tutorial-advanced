function postItem ({input, module, output, services}) {
  const item = module.state.get(`items.${input.key}`)

  services.http.post('/items', {
    title: item.title,
    completed: item.completed,
    datetime: item.datetime
  })
    .then(output.success)
    .catch(output.error)
}

postItem.async = true
postItem.outputs = ['success', 'error']

export default postItem
