function storeItems({state, services}) {
  services.set('items', state.get('app.items'))
}

export default storeItems;
