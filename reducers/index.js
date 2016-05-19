import { combineReducers } from 'redux'
import articles from './articles'
import sortParameter from './sortParameter'


export default combineReducers({
  articles,
  sortParameter
})