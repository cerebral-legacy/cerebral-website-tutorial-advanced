import setAllFilter from './chains/setAllFilter'
import setActiveFilter from './chains/setActiveFilter'
import setCompletedFilter from './chains/setCompletedFilter'

export default module => {

  module.addState({
    current: 'all'
  })

  module.addSignals({
    allClicked: setAllFilter,
    activeClicked: setActiveFilter,
    completedClicked: setCompletedFilter
  })

}
