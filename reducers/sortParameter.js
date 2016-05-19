import { SET_SORT_PARAMETER } from '../actions'


const sortParameter = (state = ["NEW",false], action) => {
	console.log(action)
  switch (action.type) {
    case SET_SORT_PARAMETER:
      return action.sortParameter
    default:
      return state
  }
}

export default sortParameter