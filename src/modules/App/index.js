import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemTitleSubmitted from './signals/newItemTitleSubmitted'
import itemCompletedToggled from './signals/itemCompletedToggled'
import mounted from './signals/mounted'
import removeItemClicked from './signals/removeItemClicked'

export default module => {

  module.addState({
    items: {},
    newItemTitle: '',
    isLoadingItems: false,
    error: null
  })

  module.addSignals({
    newItemTitleChanged: {
      chain: newItemTitleChanged,
      immediate: true
    },
    newItemTitleSubmitted,
    itemCompletedToggled,
    mounted,
    removeItemClicked
  })

}
