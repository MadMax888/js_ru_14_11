import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import optionsReducer from './options'
import dayRangeReducer from './dayRange'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    options: optionsReducer,
    date: dayRangeReducer
})
