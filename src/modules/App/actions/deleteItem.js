function deleteItem ({input, services, output}) {
  services.http.delete(`/items/${input.key}`)
    .then(output.success)
    .catch(output.error)
}

deleteItem.async = true
deleteItem.outputs = ['success', 'error']

export default deleteItem
