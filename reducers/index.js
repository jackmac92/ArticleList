import { combineReducers } from 'redux'
import articles from './articles'
import sortParameter from './sortParameter'
import visibilityFilter from './visibilityFilter'


export default combineReducers({
  articles,
  sortParameter,
  visibilityFilter
})