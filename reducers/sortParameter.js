import { SET_SORT_PARAMETER } from '../actions'
const store = require('store')
const initialState = store.get('sortParameter') || ["NEW", false]

const sortParameter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_PARAMETER:
    	store.set('sortParameter', action.sortParameter)
      return action.sortParameter
    default:
      return state
  }
}

export default sortParameter