import { createStore, combineReducers } from 'redux'
import { projects } from './reducers/projects'

export default createStore(combineReducers({
	projects,
}))
