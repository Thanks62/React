import {createStore} from 'redux'
//import {combineReducers} from 'redux'
import todos from '../reducers/todos'
let store=createStore(todos);
export default store;

