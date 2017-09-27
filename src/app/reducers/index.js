import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'

const fakeReducer = createReducer(false , {})

export default combineReducers({fakeReducer});