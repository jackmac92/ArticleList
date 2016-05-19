const store = require('store')
const initialState = store.get('visibilityFilter') || [null, null]

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
    	store.set('visibilityFilter', action.visibilityFilter)
      return action.visibilityFilter
    default:
      return state
  }
}

export default visibilityFilter
