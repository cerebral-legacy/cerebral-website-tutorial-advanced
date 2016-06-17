import newItemTitleChanged from './signals/newItemTitleChanged'
import newItemTitleSubmitted from './signals/newItemTitleSubmitted'
import itemCompletedToggled from './signals/itemCompletedToggled'

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
    itemCompletedToggled
  })

}
