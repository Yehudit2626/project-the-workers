import { applyMiddleware, combineReducers, createStore } from 'redux'
import employed from './reducers/employedReducer'
import {getAllEmployed} from './middleware/employedCrud'
const reducer=combineReducers({employed})
const store=createStore(reducer,applyMiddleware(getAllEmployed))
window.store=store
export default store;