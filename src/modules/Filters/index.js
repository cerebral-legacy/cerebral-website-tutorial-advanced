import allClicked from './signals/allClicked'
import activeClicked from './signals/activeClicked'
import completedClicked from './signals/completedClicked'

export default module => {

  module.addState({
    current: 'all'
  })

  module.addSignals({
    allClicked,
    activeClicked,
    completedClicked
  })

}
