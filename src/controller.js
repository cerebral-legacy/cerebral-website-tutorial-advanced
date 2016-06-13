import Controller from 'cerebral'
import Model from 'cerebral-model-immutable'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'
import App from './modules/App'

const controller = Controller(Model({}))

controller.addModules({
  app: App,

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
