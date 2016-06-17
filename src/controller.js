import Controller from 'cerebral'
import Model from 'cerebral-model-immutable'
import ModulesProvider from 'cerebral-provider-modules'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'
import App from './modules/App'
import LocalStorage from './modules/LocalStorage'
import Filters from './modules/Filters'

const controller = Controller(Model({}))

controller.addModules({
  app: App,
  filters: Filters,

  localStorage: LocalStorage,
  http: Http(),
  router: Router({
    '/': 'filters.allClicked',
    '/active': 'filters.activeClicked',
    '/completed': 'filters.completedClicked'
  }, {
    onlyHash: true
  }),
  devtools: Devtools()
})

controller.addContextProvider(ModulesProvider)

export default controller
