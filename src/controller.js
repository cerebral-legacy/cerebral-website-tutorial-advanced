import Controller from 'cerebral'
import Model from 'cerebral-model-immutable'
import ModulesProvider from 'cerebral-provider-modules'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'
import App from './modules/App'
import LocalStorage from './modules/LocalStorage'

const controller = Controller(Model({}))
controller.addContextProvider(ModulesProvider)

controller.addModules({
  app: App,
  localStorage: LocalStorage,

  http: Http(),
  router: Router({
    '/': 'filter.allClicked',
    '/active': 'filter.activeClicked',
    '/completed': 'filter.completedClicked'
  }, {
    onlyHash: true
  }),
  devtools: Devtools()
})

export default controller
