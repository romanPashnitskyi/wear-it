import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'
import switchReducer from './switchReducer'

export default combineReducers({
  weatherReducer,
  switchReducer
})
