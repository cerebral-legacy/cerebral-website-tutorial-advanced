function getItems({services, output}) {
  services.http.get('/items')
    .then(output.success)
    .catch(output.error)
}

getItems.async = true
getItems.outputs = ['success', 'error']

export default getItems
