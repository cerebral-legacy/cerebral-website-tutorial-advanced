function storeItemsInLocalStorage ({module, services}) {
  const items = module.state.get('items')
  const itemsArray = Object.keys(items).map(key => items[key])
  services.localStorage.set('items', itemsArray)
}

export default storeItemsInLocalStorage
