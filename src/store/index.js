import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // для подкл реакт-девтул

const enhancer = applyMiddleware(logger) // передача всех мидлвар
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store
