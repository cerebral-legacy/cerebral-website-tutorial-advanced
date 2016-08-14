import changeNewItemTitle from './chains/changeNewItemTitle'
import submitNewItemTitle from './chains/submitNewItemTitle'
import toggleItemCompleted from './chains/toggleItemCompleted'
import loadItems from './chains/loadItems'
import removeItem from './chains/removeItem'

export default module => {
  module.addState({
    items: {},
    newItemTitle: '',
    isLoadingItems: false,
    error: null
  })

  module.addSignals({
    newItemTitleChanged: {
      chain: changeNewItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewItemTitle,
    itemCompletedToggled: toggleItemCompleted,
    mounted: loadItems,
    removeItemClicked: removeItem
  })
}
