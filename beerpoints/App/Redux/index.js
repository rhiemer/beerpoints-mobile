// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'



export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    temperature: require('./TemperatureRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    buscaCerveja: require('../Containers/BuscaCerveja/reducer').reducer,
    buscaBar: require('../Containers/BuscaBar/reducer').reducer,
    buscaMapaBar: require('../Containers/MapaBar/reducer').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
