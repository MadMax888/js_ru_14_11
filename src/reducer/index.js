import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import optionsReducer from './options'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    optSelected: optionsReducer
})
