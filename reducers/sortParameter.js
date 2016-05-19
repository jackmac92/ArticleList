import { SET_SORT_PARAMETER } from '../actions'
const localStore = require('store')
const initialState = localStore.get('sortParameter') || ["NEW", false]

const sortParameter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_PARAMETER:
    	localStore.set('sortParameter', action.sortParameter)
      return action.sortParameter
    default:
      return state
  }
}

export default sortParameter