// import { combineReducers } from 'redux'
import { INCREASE} from './actions'

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case INCREASE:
      return { 
          ...state,
          count: count + 1 
      }
    default:
      return state
  }
}



// const reducer = combineReducers({
//     counter
// })

export default counter