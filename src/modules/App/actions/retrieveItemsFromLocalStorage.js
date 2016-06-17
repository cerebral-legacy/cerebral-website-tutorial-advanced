function retrieveItemsFromLocalStorage({services, output}) {
  const items = services.localStorage.get('items') || []
  output({result: items})
}

export default retrieveItemsFromLocalStorage;
