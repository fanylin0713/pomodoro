import { combineReducers } from 'redux';
import todoList from './todoList';
import clock from './clock';

const rootReducer = combineReducers({
    todoList,
    clock
});


export default rootReducer;