import { SET_VISIBILITY_FILTER } from '../actions'
const localStore = require('store')
const initialState = localStore.get('visibilityFilter') || [null, null]

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
    	localStore.set('visibilityFilter', action.visibilityFilter)
      return action.visibilityFilter
    default:
      return state
  }
}

export default visibilityFilter
